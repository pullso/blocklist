import React from "react";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignUpForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export function SignUpPage() {
  return (
    <UiFormPageLayout
      header={<UiHeader />}
      title="Sign Up"
      form={<SignUpForm />}
    />
  );
}
