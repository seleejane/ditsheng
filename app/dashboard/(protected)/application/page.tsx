import DashboardNav from '@/app/components/DashboardNav'
import MembershipApplication from '@/app/components/member/ApplicationForm'
import MemberApplication from '@/app/components/member/Application'
import React from 'react'

function page() {
  return (
    <div className="">
        <DashboardNav />
        <MemberApplication />
    </div>
  )
}

export default page
