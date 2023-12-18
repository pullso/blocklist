import React from "react";
import { useBlockItems } from "@/features/block-list/model/useBlockItems";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { BlockItem } from "@/features/block-list/ui/block-item";

export function BlockList({ className }: { className?: string }) {
  const { items, q, setQ, isLoading } = useBlockItems();

  const isLoader = isLoading;
  const isEmptyList = !isLoading && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div className={className}>
      <UiTextField
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />
      <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3">
        {isLoading && <UiSpinner className="text-teal-600 w-10 h-10 mx-auto" />}
        {isEmptyList && (
          <div className="text-xl py-1 text-center">List is empty...</div>
        )}
        {isItems && items?.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
