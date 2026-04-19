// lib/validation/kycSchema.ts
import { z } from "zod";


import { z } from "zod";

export const kycSchema = z.object({
  nationalId: z.string().min(1),

  dateOfBirth: z.coerce.date(), // ✅ FIX

  gender: z.string().min(1),
  maritalStatus: z.string().min(1),
  nationality: z.string().min(1),

  phoneNumber: z.string().min(1),
  alternativePhoneNumber: z.string().optional(),

  residentialAddress: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(1),

  nextOfKin: z.string().min(1),
  nextOfKinPhoneNumber: z.string().min(1),
  nextOfKinRelationship: z.string().min(1), // ✅ REQUIRED
});

export type KYCInput = z.infer<typeof kycSchema>;