"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  ChevronDown,
  ChevronRight,
  Menu
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Sidebar() {

  const pathname = usePathname()

  const [openSavings, setOpenSavings] = useState(true)
  const [openLoans, setOpenLoans] = useState(false)

  const isActive = (path:string) => pathname === path

  const MenuContent = () => (

    <div className="w-64 min-h-screen bg-gradient-to-b from-blue-700 via-green-600 to-green-700 text-white pl-4 pt-4">

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
                className="ml-2 mb-4 drop-shadow-sm border-r-1 rounded-2xl"
              />
            </Link>
          </motion.div>


      <nav className="p-3 space-y-2">

        <Link
          href="/dashboard"
          className={`block p-3 rounded-lg
          ${isActive("/dashboard")
          ? "bg-orange-500"
          : "hover:bg-white/20"}`}
        >
          Dashboard
        </Link>


        {/* SAVINGS */}

        <button
          onClick={() => setOpenSavings(!openSavings)}
          className="flex justify-between w-full p-3 rounded-lg hover:bg-white/20"
        >
          Savings Schemes
          {openSavings ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
        </button>

        {openSavings && (

          <div className="ml-5 space-y-1">

            <Link href="/savings/ordinary" className={`block p-2 rounded ${isActive("/savings/ordinary") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Ordinary Savings
            </Link>

            <Link href="/savings/moletlo" className={`block p-2 rounded ${isActive("/savings/moletlo") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Moletlo Savings
            </Link>

            <Link href="/savings/lefika" className={`block p-2 rounded ${isActive("/savings/lefika") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Lefika Savings
            </Link>

            <Link href="/savings/bojanala" className={`block p-2 rounded ${isActive("/savings/bojanala") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Bojanala Savings
            </Link>

            <Link href="/savings/retirement" className={`block p-2 rounded ${isActive("/savings/retirement") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Retirement Savings
            </Link>

          </div>
        )}


        {/* LOANS */}

        <button
          onClick={() => setOpenLoans(!openLoans)}
          className="flex justify-between w-full p-3 rounded-lg hover:bg-white/20"
        >
          Loan Products
          {openLoans ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
        </button>

        {openLoans && (

          <div className="ml-5 space-y-1">

            <Link href="/loans/ordinary" className={`block p-2 rounded ${isActive("/loans/ordinary") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Ordinary Loan
            </Link>

            <Link href="/loans/quick" className={`block p-2 rounded ${isActive("/loans/quick") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Quick Loan
            </Link>

            <Link href="/loans/special1" className={`block p-2 rounded ${isActive("/loans/special1") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Special Loan 1
            </Link>

            <Link href="/loans/special2" className={`block p-2 rounded ${isActive("/loans/special2") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Special Loan 2
            </Link>

            <Link href="/loans/moletlo" className={`block p-2 rounded ${isActive("/loans/moletlo") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Moletlo Loan
            </Link>

            <Link href="/loans/other" className={`block p-2 rounded ${isActive("/loans/other") ? "bg-orange-500" : "hover:bg-white/20"}`}>
              Other Loans
            </Link>

          </div>
        )}


        <Link href="/funeral"
          className={`block p-3 rounded-lg ${isActive("/funeral") ? "bg-orange-500" : "hover:bg-white/20"}`}>
          Funeral Scheme
        </Link>


        <Link href="/airtime"
          className={`block p-3 rounded-lg ${isActive("/airtime") ? "bg-orange-500" : "hover:bg-white/20"}`}>
          Airtime Scheme
        </Link>

      </nav>

    </div>
  )

  return (

    <>

      {/* MOBILE MENU */}

      <div className="lg:hidden p-3 border-b flex justify-between items-center">

        <h2 className="text-lg font-bold">
          Dashboard
        </h2>

        <Sheet>

          <SheetTrigger>

            <Menu className="cursor-pointer"/>

          </SheetTrigger>

          <SheetContent side="left" className="p-0">

            <MenuContent/>

          </SheetContent>

        </Sheet>

      </div>


      {/* DESKTOP SIDEBAR */}

      <div className="hidden lg:block">

        <MenuContent/>

      </div>

    </>
  )
}