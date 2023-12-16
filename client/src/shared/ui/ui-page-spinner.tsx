import React from "react";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import clsx from "clsx";

export function UiPageSpinner({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-100",
        className,
      )}
    >
      <UiSpinner className="text-teal-600 w-24 h-24" />
    </div>
  );
}
