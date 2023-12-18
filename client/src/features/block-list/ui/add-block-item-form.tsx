import React from "react";
import { useAddBlockItemForm } from "@/features/block-list/model/useAddBlockItemForm";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions: any = [
  { label: "WebSite", value: AddBlockItemDtoType.Website },
  { label: "Keyword", value: AddBlockItemDtoType.Keyword },
];

export function AddBlockItemForm({}: {}) {
  const { register, handleSubmit, type, isLoading } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[210px]"
        options={typeOptions}
        selectProps={{ ...register("type"), value: type }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder: type === "Keyword" ? "Enter Keyword" : "Enter Website",
          ...register("data"),
        }}
      />
      <UiButton disabled={isLoading} variant="primary">
        Add Block Item
      </UiButton>
    </form>
  );
}
