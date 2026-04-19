// app/actions/kycActions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { kycSchema } from "@/lib/validations/kycSchema";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { auth } from "@clerk/nextjs/server";
//import { KYCUncheckedCreateInput } from "@prisma/client";



const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

// 1. Generate Upload URL
export async function generateUploadUrl(fileName: string, fileType: string) {
  const key = `kyc/${Date.now()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET!,
    Key: key,
    ContentType: fileType,
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 60 });

  return { url, key };
}

// 2. Save KYC
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createKYC(data: any) {
  const validated = kycSchema.parse(data);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized: User not logged in");
  }

  const kyc = await prisma.kYC.create({
    data: {
      id: crypto.randomUUID(),
      applicationId: crypto.randomUUID(),
      ...validated,
      userId,
    },
  });

  return { success: true, kyc };
}

// 3. Get KYC Status
export async function getKYCStatus() {
  const { userId } = await auth();

  if (!userId) return null;

  const kyc = await prisma.kYC.findFirst({
    where: { userId },
  });

  return kyc?.status || null;
}