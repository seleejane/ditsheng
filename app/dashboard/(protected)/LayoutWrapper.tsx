"use client"

import { useState } from "react"
import Sidebar3 from "../../components/Sidebar3"
import { Menu } from "lucide-react"

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full">

      {/* ✅ Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block
        `}
      >
        <Sidebar3 />
      </div>

      {/* ✅ Main Content */}
      <div className="flex-1 w-full lg:ml-64">

        {/* ✅ Mobile Top Bar */}
        <div className="lg:hidden flex items-center p-4 shadow bg-white dark:bg-gray-900">
          <button onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
          <span className="ml-4 font-semibold">Dashboard</span>
        </div>

        <main className="p-4">
          {children}
        </main>

      </div>
    </div>
  )
}