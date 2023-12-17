import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities";

export default function HomePage() {
  const { data } = useSessionQuery();
  return (
    <main className={"min-h-screen"}>
      <UiHeader
        right={
          <div>
            {data?.email}
            <SignOutButton />
          </div>
        }
      ></UiHeader>
      <UiButton variant="primary">test</UiButton>
      <UiButton variant="secondary">test</UiButton>
      <UiButton variant="outlined">sign out</UiButton>
      <UiButton disabled variant="outlined">
        sign out
      </UiButton>
      <UiTextField
        label="label text"
        inputProps={{ placeholder: "placeholder text" }}
      />
      <UiTextField
        error="label text"
        inputProps={{ placeholder: "placeholder text" }}
      />
      <UiTextField inputProps={{ placeholder: "placeholder text" }} />
      <UiSelectField options={[{ value: "1", label: "options" }]} />
      <UiLink href={"https://www.google.com"}>test</UiLink>
      <UiSpinner className="text-teal-600 w-10 h-10" />
    </main>
  );
}
