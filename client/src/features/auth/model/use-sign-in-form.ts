import { ROUTES } from "@/shared/constants/routes";
import { authControllerSignIn } from "@/shared/api/generated";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignInForm() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const router = useRouter();
  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signInMutation.error ? signInMutation.error.message : "";
  return {
    register,
    isLoading: signInMutation.isPending,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    errorMessage,
  };
}
