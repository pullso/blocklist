import React from "react";
import { UiLogo } from "@/shared/ui/ui-logo";
import clsx from "clsx";

export function UiHeader({
  className,
}: {
  className?: string;
  right?: React.ReactNode;
}) {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <UiLogo></UiLogo>
    </header>
  );
}
