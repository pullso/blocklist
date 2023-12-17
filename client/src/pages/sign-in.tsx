import React from "react";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignInForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export function SignInPage() {
  return (
    <UiFormPageLayout
      header={<UiHeader />}
      title="Sign In"
      form={<SignInForm />}
    />
  );
}
