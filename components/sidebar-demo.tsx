"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconHome,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import DashboardNav from "@/app/components/DashboardNav";

export default function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconHome className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Ordinary Savings",
      href: "#",
      icon: (
        <IconBrandTabler className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Moletlo Savings",
      href: "#",
      icon: (
        <IconBrandTabler className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Bojanala Savings",
      href: "#",
      icon: (
        <IconBrandTabler className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Lefika Savings",
      href: "#",
      icon: (
        <IconBrandTabler className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Retirement Savings",
      href: "#",
      icon: (
        <IconBrandTabler className="h-8 w-8 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-0 flex w-full max-w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200  md:flex-row dark:border-neutral-100  bg-sky-100/80 dark:bg-gray-800/70 backdrop-blur-md shadow-md border-b border-white/20",
        "h-screen", 
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white md:hidden"/>
      <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  
                    <Image
                      src="/logo2.png"
                      alt="Ditsheng SACCOSS"
                      width={150}
                      height={60}
                      className="ml-2 drop-shadow-sm border-r-1 rounded-2xl"
                    />
                  
                </motion.div>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (

    <div className="flex flex-1">
      
      
      <div className="flex h-full w-full flex-1 flex-col gap-2  border-neutral-200 bg-white px-2 md:px-2 dark:border-neutral-700 dark:bg-neutral-900">
        <DashboardNav />
        <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-blue-200/20 dark:bg-neutral-400/50"
            >
              <h3 className="">Loans: 1500</h3>
            </div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-1" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
