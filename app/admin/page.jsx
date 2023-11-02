"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Admin() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/admin");
    },
  });
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
}
