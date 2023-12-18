import { useAddBlockListItemMutation } from "@/entities/block-list";
import { useForm } from "react-hook-form";
import { AddBlockItemDtoType } from "@/shared/api/generated";

export function useAddBlockItemForm() {
  const { register, reset, handleSubmit, watch } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>();

  const type = watch("type");
  const addBlockListItemMutation = useAddBlockListItemMutation();

  return {
    register,
    isLoading: addBlockListItemMutation.isPending,
    type,
    handleSubmit: handleSubmit((data) => {
      addBlockListItemMutation.mutate(data, {
        onSuccess() {
          reset();
        },
      });
    }),
  };
}
