import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";

const blockListKey = ["block-list"] as unknown[];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
    placeholderData: (previousData) => previousData,
  });
}

export function useAddBlockListItemMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}

export function useRemoveBlockListItemMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}
