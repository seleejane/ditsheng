"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"

export default function DashboardNav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Customer Relationship", href: "/dashboard/customer-relationship" },
    { name: "IT Support", href: "/dashboard/it-support" },
    { name: "Head Office", href: "/dashboard/head-office" },
  ]

  return (   
        <div className="flex items-center justify-between h-16 w-full bg-green-50 border-b border-gray-600 px-6">       
          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-black">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg 
                  transition-all duration-300 
                  hover:bg-white/60 dark:hover:bg-white/40 
                  hover:shadow-md "
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-6 mr-2">
              <motion.button
                whileHover={{ rotate: 15, scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="p-2 rounded-xl 
                bg-white/70 dark:bg-gray-300/70 
                shadow-md hover:shadow-lg 
                transition-all duration-300"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <UserButton />
          </div>

        </div>
  )
}
