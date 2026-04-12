import { Badge } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

function MembershipStatus() {
  return (
    <div className="m-2 p-4 bg-white dark:bg-gray-400 rounded-md shadow">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="/avatar.png" width={50} height={50} alt='User' />
                <h3 className='text-2xl font-bold'>Membership status: </h3>
                <h3 className='text-green-600 text-3xl'>Active</h3>
            </div>
            <div className="flex items-center gap-4">
                <button className='px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-600 transition'>Renew Membership</button> 
                <button className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition'>View Details</button>
            </div>
        </div>
      
    </div>
  )
}

export default MembershipStatus
