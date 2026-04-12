import React from 'react'
import DashboardNav from '@/app/components/DashboardNav'
import KYCForm from '@/app/components/member/Application'

export function Membership() {
  return (
    <div className='w-full'>
      <DashboardNav />
      <KYCForm />
    </div>
  )
}

export default Membership
