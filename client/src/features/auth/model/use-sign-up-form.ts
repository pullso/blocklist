import { ROUTES } from "@/shared/constants/routes";
import { authControllerSignUp } from "@/shared/api/generated";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const router = useRouter();
  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    async onSuccess() {
      await router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signUpMutation.error ? signUpMutation.error.message : "";
  return {
    register,
    isLoading: signUpMutation.isPending,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    errorMessage,
  };
}
