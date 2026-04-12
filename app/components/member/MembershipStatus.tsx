"use client"

import { Badge } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

import { useUser } from '@clerk/nextjs'
import { Prisma } from '@prisma/client'
import { useState } from 'react'
import Link from 'next/link'

function MembershipStatus() {
  const { user } = useUser()
  const member = Prisma.MembershipApplicationsScalarFieldEnum.userId;
  const [isMember, setIsMember] = useState("Not Yet Applied For")

if (member === user?.id) {
  console.log("User is a member")
  setIsMember("Member")
} else {
  console.log("User is not a member")
}
  return (
    <div className="m-2 p-4 bg-white dark:bg-gray-400 rounded-md shadow">
        <div className="sm:flex flex-col gap-4 md:flex-row items-center justify-between ">
            <div className="flex items-center gap-4">
                <Image src={user?.imageUrl || "/avatar.png"} width={50} height={50} alt='User' className='object-cover rounded-full' />
                <h3 className='text-2xl font-bold'>Membership status: </h3>
                <h4 className='text-red-600 text-3xl'>{isMember}</h4>
            </div> 
            {isMember === "Not Yet Applied For" ? (
                <Link href="/dashboard/membership/">
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-700 via-green-600 to-green-700 text-white rounded-md mouseover:bg-green-600 transition'>Apply for Membership</button>
                </Link>
            ): (
                <Link href="/dashboard/membership/">
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-700 via-green-600 to-green-700 text-white rounded-md hover:bg-green-600 transition'>View Membership Details</button>
                </Link>
            )}
        </div>
      
    </div>
  )
}

export default MembershipStatus
