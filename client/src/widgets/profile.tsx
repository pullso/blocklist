import React from "react";
import { useSessionQuery } from "@/entities/session";
import { SignOutButton } from "@/features/auth";

function Profile() {
  const { data: session } = useSessionQuery();
  if (!session) {
    return null;
  }
  return (
    <div className="flex gap-2 items-center">
      {session?.email}
      <SignOutButton />
    </div>
  );
}

export default Profile;
