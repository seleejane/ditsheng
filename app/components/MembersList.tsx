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

const data = [
  {
    id: "DS-SAC-001",
    fullName: "Seleejana Gaelebale",
    email: "seleejane@gmail.com",
    dateJoined: "10 March 2026"
  },
  {
    id: "DS-SAC-002",
    fullName: "Kabelo Motsumi",
    email: "kabelo.motsumi@gmail.com",
    dateJoined: "12 March 2026"
  },
  {
    id: "DS-SAC-003",
    fullName: "Thato Molefe",
    email: "thato.molefe@gmail.com",
    dateJoined: "15 March 2026"
  },
  {
    id: "DS-SAC-004",
    fullName: "Neo Ramokgadi",
    email: "neo.ramokgadi@gmail.com",
    dateJoined: "18 March 2026"
  },
  {
    id: "DS-SAC-005",
    fullName: "Mpho Dintwe",
    email: "mpho.dintwe@gmail.com",
    dateJoined: "20 March 2026"
  },
  {
    id: "DS-SAC-006",
    fullName: "Tshepo Kgosi",
    email: "tshepo.kgosi@gmail.com",
    dateJoined: "22 March 2026"
  },
  {
    id: "DS-SAC-007",
    fullName: "Onalenna Sechele",
    email: "onalenna.sechele@gmail.com",
    dateJoined: "25 March 2026"
  },
  {
    id: "DS-SAC-008",
    fullName: "Boitumelo Ndlovu",
    email: "boitumelo.ndlovu@gmail.com",
    dateJoined: "28 March 2026"
  },
  {
    id: "DS-SAC-009",
    fullName: "Katlego Mpho",
    email: "katlego.mpho@gmail.com",
    dateJoined: "30 March 2026"
  },
  {
    id: "DS-SAC-010",
    fullName: "Lebo Segopolo",
    email: "lebo.segopolo@gmail.com",
    dateJoined: "01 April 2026"
  },
  {
    id: "DS-SAC-011",
    fullName: "Oarabile Moagi",
    email: "oarabile.moagi@gmail.com",
    dateJoined: "03 April 2026"
  },
  {
    id: "DS-SAC-012",
    fullName: "Kagiso Mooketsi",
    email: "kagiso.mooketsi@gmail.com",
    dateJoined: "05 April 2026"
  },
  {
    id: "DS-SAC-013",
    fullName: "Refilwe Seretse",
    email: "refilwe.seretse@gmail.com",
    dateJoined: "07 April 2026"
  },
  {
    id: "DS-SAC-014",
    fullName: "Tshegofatso Phiri",
    email: "tshegofatso.phiri@gmail.com",
    dateJoined: "09 April 2026"
  },
  {
    id: "DS-SAC-015",
    fullName: "Lorato Bantsi",
    email: "lorato.bantsi@gmail.com",
    dateJoined: "11 April 2026"
  },
  {
    id: "DS-SAC-016",
    fullName: "Pako Motshidisi",
    email: "pako.motshidisi@gmail.com",
    dateJoined: "13 April 2026"
  },
  {
    id: "DS-SAC-017",
    fullName: "Goitseone Kelebogile",
    email: "goitseone.kelebogile@gmail.com",
    dateJoined: "15 April 2026"
  },
  {
    id: "DS-SAC-018",
    fullName: "Bakang Tshukudu",
    email: "bakang.tshukudu@gmail.com",
    dateJoined: "17 April 2026"
  },
  {
    id: "DS-SAC-019",
    fullName: "Tebogo Masilo",
    email: "tebogo.masilo@gmail.com",
    dateJoined: "19 April 2026"
  },
  {
    id: "DS-SAC-020",
    fullName: "Keitumetse Ramaswamy",
    email: "keitumetse.ramaswamy@gmail.com",
    dateJoined: "21 April 2026"
  },
  {
    id: "DS-SAC-021",
    fullName: "Masego Khumo",
    email: "masego.khumo@gmail.com",
    dateJoined: "23 April 2026"
  },
  {
    id: "DS-SAC-022",
    fullName: "Phenyo Mokoena",
    email: "phenyo.mokoena@gmail.com",
    dateJoined: "25 April 2026"
  },
  {
    id: "DS-SAC-023",
    fullName: "Olebogeng Mathe",
    email: "olebogeng.mathe@gmail.com",
    dateJoined: "27 April 2026"
  },
  {
    id: "DS-SAC-024",
    fullName: "Tshepo Dube",
    email: "tshepo.dube@gmail.com",
    dateJoined: "29 April 2026"
  },
  {
    id: "DS-SAC-025",
    fullName: "Naledi Kgafela",
    email: "naledi.kgafela@gmail.com",
    dateJoined: "01 May 2026"
  },
  {
    id: "DS-SAC-026",
    fullName: "Keneilwe Nare",
    email: "keneilwe.nare@gmail.com",
    dateJoined: "03 May 2026"
  },
  {
    id: "DS-SAC-027",
    fullName: "Thabang Molapo",
    email: "thabang.molapo@gmail.com",
    dateJoined: "05 May 2026"
  },
  {
    id: "DS-SAC-028",
    fullName: "Boipelo Setlhare",
    email: "boipelo.setlhare@gmail.com",
    dateJoined: "07 May 2026"
  },
  {
    id: "DS-SAC-029",
    fullName: "Karabo Mothibi",
    email: "karabo.mothibi@gmail.com",
    dateJoined: "09 May 2026"
  },
  {
    id: "DS-SAC-030",
    fullName: "Tlotlo Pheto",
    email: "tlotlo.pheto@gmail.com",
    dateJoined: "11 May 2026"
  },
  {
    id: "DS-SAC-031",
    fullName: "Amogelang Sebego",
    email: "amogelang.sebego@gmail.com",
    dateJoined: "13 May 2026"
  }
];


function MembersList() {
  return (
    <div>
        <Table>
  <TableCaption>A list of SACCOSS MEMBERS.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] font-bold">Membership ID</TableHead>
      <TableHead className="w-[100px] font-bold">Full Name</TableHead>
      <TableHead className="w-[100px] font-bold">Email Address</TableHead>
      <TableHead className="w-[100px] font-bold">Date Joined</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((member) => (
      <TableRow key={member.id}>
        <TableCell className="font-medium">{member.id}</TableCell>
        <TableCell>{member.fullName}</TableCell>
        <TableCell>{member.email}</TableCell>
      <TableCell>{member.dateJoined}</TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>
    </div>
  )
}

export default MembersList
