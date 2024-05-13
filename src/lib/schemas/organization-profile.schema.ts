import { z } from "zod";
import { FileWithStringType } from "./image-schema";

export const OrganizationProfileSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),

  representative: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),

  contact: z
    .string()
    .regex(/^(98|97)\d{8}$/)
    .optional(),
  representativeContact: z
    .string()
    .regex(/^(98|97)\d{8}$/)
    .optional(),

  email: z.string().email(),

  logo: FileWithStringType,

  country: z.string(),
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
  ward: z.string().min(1).max(2),
  street: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),
});

export const OrganizationProfileDefaultValues = {
  name: "",
  representative: "",
  email: "",
  contact: "",
  representativeContact: "",
  logo: "",
  country: "Nepal",
  province: "",
  district: "",
  municipality: "",
  ward: "",
  street: "",
};

export type OrganizationProfileType = z.infer<typeof OrganizationProfileSchema>;

// Define a type for a single field in the OrganizationProfileFields array
type OrganizationProfileField = {
  fieldId: string;
  label: string;
  placeholder?: string;
  required: boolean;
  fieldTag?: "input" | "select"; // Define the possible field tags
  type: string; // Optional for input fields
  options?: { value: string; label: string }[]; // Optional for select fields
};

// Define the OrganizationProfileFields array with the specified type
export const OrganizationProfileFields: OrganizationProfileField[] = [
  {
    fieldId: "logo",
    fieldTag: "input",
    label: "Upload Logo",
    placeholder: "Upload",
    required: false,
    type: "file",
  },
  {
    fieldId: "name",
    label: "Name",
    placeholder: "Enter name",
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
    fieldId: "representative",
    label: "Representative",
    placeholder: "Contact Person",
    required: true,
    fieldTag: "input",
    type: "text",
  },
  {
    fieldId: "contact",
    label: "Office Phone",
    placeholder: "98XXXXXXXX",
    required: true,
    fieldTag: "input",
    type: "tel",
  },
  {
    fieldId: "representativeContact",
    label: "Representative Phone",
    placeholder: "98XXXXXXXX",
    required: true,
    fieldTag: "input",
    type: "tel",
  },
  {
    fieldId: "address",
    label: "Address",
    required: true,
    type: "address",
  },
];
