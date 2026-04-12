import React from 'react'
import Sidebar3 from '../../components/Sidebar3';


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
  <div className="flex w-full">
    
    {/* ✅ Fixed Sidebar */}
    <div className="lg:fixed top-0 left-0 h-screen w-64 z-40 bg-white dark:bg-gray-900">
      <Sidebar3 />
    </div>

    {/* ✅ Main Content (push it right) */}
    <div className="lg:ml-64 w-full">
      {children}
    </div>

  </div>
)
}