import { z } from "zod";
import { FileWithStringType } from "./image-schema";
import { calculateAge } from "../utils/date-utils";
import {
  BloodType,
  Caste,
  Gender,
  Race,
  Religion,
  RhFactor,
} from "../types/user-type";

export const DonorProfileSchema = z
  .object({
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
    emergencyContact: z
      .string()
      .regex(/^(98|97)\d{8}$/)
      .optional(),

    email: z.string().email(),

    occupation: z
      .string()
      .min(3)
      .max(30)
      .regex(/^[a-zA-Z\s]+$/),

    gender: z.nativeEnum(Gender),

    caste: z.nativeEnum(Caste),
    religion: z.nativeEnum(Religion),
    bloodType: z.nativeEnum(BloodType),
    rhFactor: z.nativeEnum(RhFactor),
    race: z.nativeEnum(Race),
    image: FileWithStringType,
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

    ward: z.string().regex(/^\d{1,2}$/, {
      message: "Enter valid ward",
    }),

    street: z
      .string()
      .min(3)
      .max(30)
      .regex(/^[a-zA-Z\s]+$/),

    weight: z.string().regex(/^\d+(\.\d+)?$/, {
      message: "Enter valid weight",
    }),

    dob: z.string(),
  })
  .refine(
    (values) => {
      const dob = values.dob;
      const age = calculateAge(dob);
      return age >= 18;
    },
    {
      message: "Age must be 18 or above",
      path: ["dob"],
    }
  );
export const DonorProfileDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  emergencyContact: "",
  image: "",
  gender: undefined,
  bloodType: undefined,
  rhFactor: undefined,
  race: undefined,
  caste: undefined,
  religion: undefined,
  ward: "",
  weight: "",
  occupation: "",
  country: "Nepal",
  province: "",
  district: "",
  municipality: "",
  street: "",
};

export type DonorProfileType = z.infer<typeof DonorProfileSchema>;

// Define a type for a single field in the DonorProfileFields array
type DonorProfileField = {
  fieldId: string;
  label: string;
  placeholder?: string;
  required: boolean;
  fieldTag?: "input" | "select"; // Define the possible field tags
  type: string; // Optional for input fields
  options?: { value: string; label: string }[]; // Optional for select fields
  image?: File | string | undefined;
};

// Define the DonorProfileFields array with the specified type
export const DonorProfileFields: DonorProfileField[] = [
  {
    fieldId: "image",
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
    fieldId: "emergencyContact",
    label: "Emergency Contact",
    placeholder: "98XXXXXXXX",
    required: true,
    fieldTag: "input",
    type: "tel",
  },
  {
    fieldId: "occupation",
    label: "Occupation",
    placeholder: "Enter Occupation",
    required: true,
    fieldTag: "input",
    type: "text",
  },

  {
    fieldId: "weight",
    label: "Weight",
    placeholder: "Weight (KG)",
    required: true,
    fieldTag: "input",
    type: "number",
  },
  {
    fieldId: "gender",
    label: "Gender",
    placeholder: "Select Gender",
    required: true,
    fieldTag: "select",
    options: Object.keys(Gender).map((key) => ({
      value: Gender[key as keyof typeof Gender],
      label: Gender[key as keyof typeof Gender],
    })),
    type: "select",
  },
  {
    fieldId: "race",
    label: "Race",
    placeholder: "Select Ethic Group",
    required: true,
    fieldTag: "select",
    options: Object.keys(Race).map((key) => ({
      value: Race[key as keyof typeof Race],
      label: Race[key as keyof typeof Race],
    })),
    type: "select",
  },

  {
    fieldId: "caste",
    label: "Caste",
    placeholder: "Select Caste",
    required: true,
    fieldTag: "select",
    options: Object.keys(Caste).map((key) => ({
      value: Caste[key as keyof typeof Caste],
      label: Caste[key as keyof typeof Caste],
    })),
    type: "select",
  },

  {
    fieldId: "religion",
    label: "Religion",
    placeholder: "Select Religion",
    required: true,
    fieldTag: "select",
    options: Object.keys(Religion).map((key) => ({
      value: Religion[key as keyof typeof Religion],
      label: Religion[key as keyof typeof Religion],
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
      value: BloodType[key as keyof typeof BloodType],
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
      value: RhFactor[key as keyof typeof RhFactor],
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
