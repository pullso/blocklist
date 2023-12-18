import React from "react";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useRemoveBlockListItemMutation } from "@/entities/block-list";

export function BlockItem({
  type,
  id,
  data,
}: {
  type: AddBlockItemDtoType;
  id: number;
  data: string;
}) {
  const removeItemMutation = useRemoveBlockListItemMutation();

  const handleRemove = () => removeItemMutation.mutate(id);

  return (
    <div className="flex gap-2">
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>
      <button
        className="ml-auto text-rose-500 hover:text-rose-600 cursor-pointer disabled:opacity-50 p-1"
        onClick={handleRemove}
      >
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

const TrashIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
    />
  </svg>
);
