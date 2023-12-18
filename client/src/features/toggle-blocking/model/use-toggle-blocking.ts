import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();
  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (!accountQuery.data) return;
    updateAccountMutation.mutate({
      isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
    });
  };

  return {
    toggleBlocking,
    isLoading: updateAccountMutation.isPending,
    isReady: accountQuery.isSuccess,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
  };
}
