"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Home", href: "#introduction" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 
      bg-sky-100/80 dark:bg-gray-800/70 
      backdrop-blur-md 
      shadow-md border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/">
              <Image
                src="/logo2.png"
                alt="Ditsheng SACCOSS"
                width={200}
                height={80}
                className="ml-2 drop-shadow-sm border-r-1 rounded-2xl"
              />
            </Link>
          </motion.div>

          {/* Center Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
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
                  hover:shadow-md"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4 mr-2">
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
      </div>
    </motion.nav>
  )
}
