import { z } from "zod";
import { BloodType, Gender, RhFactor } from "../types/user-type";

export const DonorRegisterSchema = z.object({
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
});

export const DonorRegisterDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: undefined,
  bloodType: undefined,
  rhFactor: undefined,
};

export type DonorRegisterType = z.infer<typeof DonorRegisterSchema>;

// Define a type for a single field in the DonorRegisterFields array
type DonorRegisterField = {
  fieldId: string;
  label: string;
  placeholder?: string;
  required: boolean;
  fieldTag?: "input" | "select"; // Define the possible field tags
  type: string; // Optional for input fields
  options?: { value: string; label: string }[]; // Optional for select fields
};

// Define the DonorRegisterFields array with the specified type
export const DonorRegisterFields: DonorRegisterField[] = [
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
    placeholder: "Select",
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
    placeholder: "RH Factor",
    required: true,
    fieldTag: "select",
    options: Object.keys(RhFactor).map((key) => ({
      value: key,
      label: RhFactor[key as keyof typeof RhFactor],
    })),
    type: "select",
  },
];
