"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  ChevronDown,
  ChevronRight,
  Menu,
} from "lucide-react"
import {
  LayoutDashboard,
  Home,
  CreditCard,
    Star,
    Landmark,
    Shield,
    Phone,
    ArrowRight,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import Image from "next/image"
import { motion } from "framer-motion"

interface MenuContentProps {
  pathname: string
  isActive: (path: string) => boolean
  openSavings: boolean
  setOpenSavings: (value: boolean) => void
  openLoans: boolean
  setOpenLoans: (value: boolean) => void
}

function MenuContent({ pathname, isActive, openSavings, setOpenSavings, openLoans, setOpenLoans }: MenuContentProps) {
  return (

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

            {/* Dashboard */}
            <Link
                href="/dashboard"
                className={`flex items-center gap-3 p-3 rounded-lg
                ${isActive("/dashboard")
                ? "bg-orange-500"
                : "hover:bg-white/20"}`}
            >
                <Home size={18}/>
                Dashboard
            </Link>


        {/* SAVINGS */}

        <button
            onClick={() => setOpenSavings(!openSavings)}
            className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-white/20"
        >
            <span className="flex items-center gap-3">
            <Landmark size={18}/>
            Savings Schemes
            </span>

            {openSavings ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
        </button>

        {openSavings && (

        <div className="ml-5 space-y-1">

            <Link href="/dashboard/products/ordinary-savings"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/dashboard/products/ordinary-savings") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Ordinary Savings
            </Link>

            <Link href="/dashboard/products/moletlo-savings"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/dashboard/products/moletlo-savings") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Moletlo Savings
            </Link>

            <Link href="/dashboard/products/lefika-savings"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/dashboard/products/lefika-savings") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Lefika Savings
            </Link>

            <Link href="/dashboard/products/bojanala-savings"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/dashboard/products/bojanala-savings") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Bojanala Savings
            </Link>

            <Link href="/dashboard/products/retirement-savings"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/dashboard/products/retirement-savings") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Retirement Savings
            </Link>
        </div>


        )}

        {/* LOANS */}

        <button
            onClick={() => setOpenLoans(!openLoans)}
            className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-white/20"
        >
            <span className="flex items-center gap-3">
            <CreditCard size={18}/>
            Loan Products
            </span>

            {openLoans ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
        </button>

        {openLoans && (

        <div className="ml-5 space-y-1">

            <Link href="/dashboard/loans/ordinary"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/dashboard/loans/ordinary") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Ordinary Loan
            </Link>

            <Link href="/loans/quick"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/loans/quick") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Quick Loan
            </Link>

            <Link href="/loans/special1"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/loans/special1") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <Star size={16}/>
                Special Loan 1
            </Link>

            <Link href="/loans/special2"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/loans/special2") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <Star size={16}/>
                Special Loan 2
            </Link>

            <Link href="/loans/moletlo"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/loans/moletlo") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Moletlo Loan
            </Link>

            <Link href="/loans/other"
                className={`flex items-center gap-3 p-2 rounded ${isActive("/loans/other") ? "bg-orange-500" : "hover:bg-white/20"}`}>
                <ArrowRight size={16}/>
                Other Loans
            </Link>

            </div>
        )}


        {/* Funeral */}
        <Link href="/funeral"
            className={`flex items-center gap-3 p-3 rounded-lg ${isActive("/funeral") ? "bg-orange-500" : "hover:bg-white/20"}`}>
            <Shield size={18}/>
            Funeral Scheme
        </Link>


        {/* Airtime */}
        <Link href="/airtime"
            className={`flex items-center gap-3 p-3 rounded-lg ${isActive("/airtime") ? "bg-orange-500" : "hover:bg-white/20"}`}>
            <Phone size={18}/>
            Airtime Scheme
        </Link>

       </nav>
      </div>
    )
  }
  
  export default function Sidebar3() {
  
    const pathname = usePathname()
  
    const [openSavings, setOpenSavings] = useState(true)
    const [openLoans, setOpenLoans] = useState(false)
  
    const isActive = (path:string) => pathname === path
  
    return (

    <>

      {/* MOBILE MENU */}
     
      <div className="p-3 border-b flex justify-between items-center lg:hidden">

        <h2 className="text-lg font-bold">
          Dashboard
        </h2>

        <Sheet>

          <SheetTrigger>

            <Menu className="cursor-pointer"/>

          </SheetTrigger>

          <SheetContent side="left" className="p-0 bg-gradient-to-b from-blue-900 via-green-700 to-green-900 text-white max-w-xs">

            <MenuContent pathname={pathname} isActive={isActive} openSavings={openSavings} setOpenSavings={setOpenSavings} openLoans={openLoans} setOpenLoans={setOpenLoans} />

          </SheetContent>

        </Sheet>

      </div>
     


      {/* DESKTOP SIDEBAR */}

      <div className="hidden lg:block">

        <MenuContent pathname={pathname} isActive={isActive} openSavings={openSavings} setOpenSavings={setOpenSavings} openLoans={openLoans} setOpenLoans={setOpenLoans} />

      </div>

    </>
  )
}