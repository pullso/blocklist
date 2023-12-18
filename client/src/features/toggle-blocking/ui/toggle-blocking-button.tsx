import React from "react";
import { UiButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "@/features/toggle-blocking/model/use-toggle-blocking";

function ToggleBlockingButton() {
  const { isBlockingEnabled, isLoading, isReady, toggleBlocking } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
    >
      {isBlockingEnabled ? "Disable" : "Enable"} Blocking
    </UiButton>
  );
}

export default ToggleBlockingButton;
