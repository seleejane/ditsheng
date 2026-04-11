"use server"

import { prisma } from "../prisma"
import { currentUser } from "@clerk/nextjs/server"


export async function syncUser() {
  const clerkUser = await currentUser()

  if (!clerkUser) {return null}

  const existingUser = await prisma.user.findUnique({
    where: { clerkUserId: clerkUser.id },
  })


  if (existingUser) {
    return existingUser
  }

  const newUser = await prisma.user.create({
    data: {
      id:           "U" + crypto.randomUUID(), // Prefix with "01" to ensure it starts with a letter
      clerkUserId:  clerkUser.id,
      email:        clerkUser.emailAddresses[0].emailAddress,
      firstName:    clerkUser?.firstName ,
      lastName:     clerkUser?.lastName,
      imageUrl:     clerkUser?.imageUrl,
      createdAt:   new Date(),
      updatedAt:   new Date(),
      }
    })

  return newUser
}