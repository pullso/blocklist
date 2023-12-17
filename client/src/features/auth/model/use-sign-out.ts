import { useMutation } from "@tanstack/react-query";
import { authControllerSingOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/router";
import { useResetSession } from "@/entities";

export function useSignOut() {
  const resetSession = useResetSession();
  const router = useRouter();
  const signOutMutation = useMutation({
    mutationFn: authControllerSingOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });
  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
