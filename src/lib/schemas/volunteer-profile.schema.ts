import { z } from "zod";
import { FileWithStringType } from "./image-schema";
import { BloodType, Gender, RhFactor } from "../types/user-type";

export const VolunteerProfileSchema = z.object({
  firstName: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),
  lastName: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),
  phone: z
    .string()
    .regex(/^(98|97)\d{8}$/)
    .optional(),
  email: z.string().email(),
  gender: z.nativeEnum(Gender),
  bloodType: z.nativeEnum(BloodType),
  rhFactor: z.nativeEnum(RhFactor),
  profileImage: FileWithStringType,

  province: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),

  district: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),

  municipality: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),
  ward: z.number().int().min(1).max(2),
  street: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),
});

export const VolunteerProfileDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  profileImage: "",
  gender: undefined,
  bloodType: undefined,
  rhFactor: undefined,
  province: "",
  district: "",
  municipality: "",
};

export type VolunteerProfileType = z.infer<typeof VolunteerProfileSchema>;

// Define a type for a single field in the VolunteerProfileFields array
type VolunteerProfileField = {
  fieldId: string;
  label: string;
  placeholder?: string;
  required: boolean;
  fieldTag?: "input" | "select"; // Define the possible field tags
  type: string; // Optional for input fields
  options?: { value: string; label: string }[]; // Optional for select fields
  profileImage?: File | string | undefined;
};

// Define the VolunteerProfileFields array with the specified type
export const VolunteerProfileFields: VolunteerProfileField[] = [
  {
    fieldId: "profileImage",
    fieldTag: "input",
    label: "Upload Profile",
    placeholder: "Upload",
    required: false,
    type: "file",
  },
  {
    fieldId: "firstName",
    label: "First Name",
    placeholder: "Enter First Name",
    required: true,
    fieldTag: "input",
    type: "text",
  },
  {
    fieldId: "lastName",
    label: "Last Name",
    placeholder: "Enter Last Name",
    required: true,
    fieldTag: "input",
    type: "text",
  },
  {
    fieldId: "email",
    label: "Email",
    placeholder: "Enter email",
    required: true,
    fieldTag: "input",
    type: "email",
  },
  {
    fieldId: "phone",
    label: "Phone",
    placeholder: "98XXXXXXXX",
    required: true,
    fieldTag: "input",
    type: "tel",
  },
  {
    fieldId: "gender",
    label: "Gender",
    placeholder: "Select Gender",
    required: true,
    fieldTag: "select",
    options: Object.keys(Gender).map((key) => ({
      value: key,
      label: Gender[key as keyof typeof Gender],
    })),
    type: "select",
  },

  {
    fieldId: "bloodType",
    label: "Blood Type",
    placeholder: "Select Blood Type",
    required: true,
    fieldTag: "select",
    options: Object.keys(BloodType).map((key) => ({
      value: key,
      label: BloodType[key as keyof typeof BloodType],
    })),
    type: "select",
  },

  {
    fieldId: "rhFactor",
    label: "RH Factor",
    placeholder: "Select RH Factor",
    required: true,
    fieldTag: "select",
    options: Object.keys(RhFactor).map((key) => ({
      value: key,
      label: RhFactor[key as keyof typeof RhFactor],
    })),
    type: "select",
  },
  {
    fieldId: "address",
    label: "Address",
    required: true,
    type: "address",
  },
];
