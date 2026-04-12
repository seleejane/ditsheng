import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';

const savings = [
    {   id: "SAV-001",
        name: "Ordinary Savings",
        Amount: "P100.00",
    },
    {   id: "SAV-002",
        name: "Moletlo Savings",
        Amount: "P500.00",
    },
    {   id: "SAV-003",
        name: "Lefika Savings",
        Amount: "P1,000.00",
    },
    {   id: "SAV-004",
        name: "Bojanala Savings",
        Amount: "P2,000.00",
    },
    {   id: "SAV-005",
        name: "Retirement Savings",
        Amount: "P5,000.00",
    }
];

const loans = [
    {   id: "LOAN-001",
        name: "Ordinary Loan",
        Amount: "P1,000.00",
    },
    {   id: "LOAN-002",
        name: "Special Loan 1",
        Amount: "P1,500.00",
    }
];

function FacilitiesTable() {
  return (
<div>
    <h4 className='text-lime-500 font-bold'>Your Saving Schemes</h4>
    <Table>
    <TableHeader>
        <TableRow>
        <TableHead className="w-[100px] font-bold">Scheme ID</TableHead>
        <TableHead className="w-[100px] font-bold">Scheme Name</TableHead>
        <TableHead className="w-[100px] font-bold">Amount</TableHead>
        <TableHead className="w-[100px] font-bold">Action</TableHead>

        </TableRow>
    </TableHeader>
    <TableBody>
        {savings.map((facility) => (
        <TableRow key={facility.id}>
            <TableCell className="font-medium">{facility.id}</TableCell>
            <TableCell>{facility.name}</TableCell>
            <TableCell>{facility.Amount}</TableCell>
            <TableCell className="flex items-center gap-2">
                <Button variant="destructive" size="sm">View Statement</Button>
                <Button variant="destructive" size="sm" className="hover:bg-green-500">Apply Now</Button>
            </TableCell>
        </TableRow>
        ))}
    </TableBody>
    </Table>
    <h4 className='text-red-400 font-bold mt-8'>Your Loan Schemes</h4>
    <Table>
    <TableHeader>
        <TableRow>
        <TableHead className="w-[100px] font-bold">Scheme ID</TableHead>
        <TableHead className="w-[100px] font-bold">Scheme Name</TableHead>
        <TableHead className="w-[100px] font-bold">Amount</TableHead>
        <TableHead className="w-[100px] font-bold">Action</TableHead>

        </TableRow>
    </TableHeader>
    <TableBody>
        {loans.map((facility) => (
        <TableRow key={facility.id}>
            <TableCell className="font-medium">{facility.id}</TableCell>
            <TableCell>{facility.name}</TableCell>
            <TableCell>{facility.Amount}</TableCell>
            <TableCell className="flex items-center gap-2">
                <Button variant="destructive" size="sm">View Statement</Button>
                <Button variant="destructive" size="sm" className="hover:bg-green-500">Apply Now</Button>
            </TableCell>
        </TableRow>
        ))}
    </TableBody>
    </Table>
    </div>
  )
}

export default FacilitiesTable