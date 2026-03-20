"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"
import { useEffect } from "react"
import { useRouter } from "next/navigation"



export default function Intro() {
  
  const { userId, isLoaded } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && userId) {
      router.push("/dashboard")
    }
  }, [isLoaded, userId, router])


  return (
    <div className="flex-1 space-y-6 py-16">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium"
      >
        <Sparkles size={16} />
        My Investment, My Priority
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-4xl font-extrabold leading-tight"
      >
         <br />
        <span className="bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
          INVEST NOW
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl text-gray-600 dark:text-gray-50 max-w-xl"
      >
        Ditsheng Savings and Credit Cooperative Society was registered with Co-operative Society Act in 2005 with an objective for members to regularly pool savings and subsequently obtain services like loans, Funeral cover.


      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <button className="bg-blue-400 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
          <Link href="/sign-in" className="flex items-center gap-2">
            Get Started
            <ArrowRight size={18} />
          </Link>
        </button>

        
        <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
          <Link href="/dashboard" className="flex items-center gap-2">
            Go to Dashboard
            <ArrowRight size={18} />
          </Link>
        </button>
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute -z-10 top-10 left-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
    </div>
  )
}
