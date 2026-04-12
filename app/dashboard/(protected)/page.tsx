"use client"

import DashboardNav from '../../components/DashboardNav'
import {useUser} from '@clerk/nextjs'
import { useAuth } from "@clerk/nextjs"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import MembersList from '@/app/components/MembersList'
import MembershipStatus from '@/app/components/member/MembershipStatus'
import { currentUser } from '@clerk/nextjs/server'
import FacilitiesTable from '@/app/components/member/FacilitiesTable'


function Dashboard() {
  const { user } = useUser()
  const { userId, isLoaded } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in")
    }
  }, [isLoaded, userId, router])
  return (
    <>  
      <div className='w-full'>
        <div className="sticky top-0 z-50 bg-white dark:bg-gray-900">
          <DashboardNav />
        </div>

        <div className="m-2 p-4 bg-white dark:bg-gray-400 rounded-md shadow">
          <h3 className='text-2xl font-bold'>Welcome to your Dashboard <span className='text-orange-700 dark:text-white'> {user?.firstName || 'Guest'} {user?.lastName || 'User'}</span></h3>
          <p className='text-gray-600 mt-2'>Here you can manage your account, view your transactions, and access all the features of our platform.</p>
        </div>
        <MembershipStatus />
        <div className="m-2 p-4 bg-white dark:bg-gray-400 rounded-md shadow">
          
          <FacilitiesTable />
        </div>
        
      </div>
    </>
    
  )
}

export default Dashboard
