import * as z from "zod/v4"



export const addressSchemaZ = z.object({
  village: z.string(),
  district: z.string(),
  upazila: z.string(),
  postOffice: z.string(),
  zipCode: z.string(),
  country: z.string(),
  division: z.string(),
});

export const userSchemaZ = z.object({
    image: z.string().min(1, "Image is required"),
    fullName: z.object({
    english: z.string().min(1),
    bangla: z.string().min(1),
  }),
  email: z.email().optional(),
  phoneNumber: z.string().min(1),
  password: z.string().min(6).optional(), // Password not required for all cases (e.g., admin creation)

  personalInfo: z.object({
    fatherInfo: z.object({
      name: z.string().min(1),
      phoneNumber: z.number().optional(),
      nidNumber: z.number(),
    }),
    motherInfo: z.object({
      name: z.string().min(1),
      phoneNumber: z.number().optional(),
      nidNumber: z.number(),
    }),
    birthDate: z.coerce.date(),
    birthId: z.string().min(1),
    nationality: z.string().min(1),
    religion: z.string().min(1),
    presentAddress: addressSchemaZ,
    permanentAddress: addressSchemaZ,
  }),
})

export const staffSchemaZ = z.object({
  userInfo: userSchemaZ,
  role: z.enum(["Admin", "Staff"]).default("Staff"),
  position: z.string().min(1),
  education: z.string().min(1),
  classTime: z.array(z.string()).optional(), 
});

const classInfoSchemaZ = z.object({
  roll: z.number(),
  classNo: z.union([
    z.literal("play"),
    z.literal("baby"),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]),
  session: z.number(),
  group: z.enum(["A", "B"]),
  shift: z.enum(["Morning", "Evening"]),
});

export const studentSchemaZ = z.object({
  userInfo: userSchemaZ,
  classInfo: classInfoSchemaZ,
});

export type UserSchemaType = z.infer<typeof userSchemaZ>;
export type AddressSchemaType = z.infer<typeof addressSchemaZ>;
export type StaffSchemaType = z.infer<typeof staffSchemaZ>;
export type StudentSchemaType = z.infer<typeof studentSchemaZ>;