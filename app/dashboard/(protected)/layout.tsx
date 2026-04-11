import React from 'react'
import Sidebar3 from '../../components/Sidebar3';
/* 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row  justify-between w-full">
    <Sidebar3 />
      {children}
    </div>
  );
} */

// app/(protected)/layout.tsx
import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { syncUser } from "@/lib/actions/users"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const clerkUser = await currentUser()

  if (!clerkUser) {
    redirect("/sign-in")
  }

  await syncUser()

  return (
  <div className="flex flex-col lg:flex-row  justify-between w-full">
    <Sidebar3 />
    {children}
  </div>);
}