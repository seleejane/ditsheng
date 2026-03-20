"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import Intro from "./components/intro"
import {motion} from "framer-motion"
import Navbar from "./components/navbar";
import { Globe3DDemo } from "./components/threedglobe";


export default function Home() {
  return (
    <main className="border-gray-200">
      <Navbar />
      <Spotlight className="absolute top-0 left-0 w-full h-full text-gray-300 dark:text-gray-800 opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-300/50 to-transparent" />

      <section
        id="introduction"
        className="relative flex flex-col-reverse md:flex-row items-center justify-between 
                   gap-12 max-w-7xl mx-auto px-6 py-5 h-screen"
      >
        <Intro />

        {/* Animated Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex-1"
        >
          {/* Glow Background */}
          <div className="absolute -z-10 inset-0 bg-blue-400/20 blur-3xl rounded-full"></div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-2xl shadow-2xl overflow-hidden"
          >
           
            <Globe3DDemo />
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}