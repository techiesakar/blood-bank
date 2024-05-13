import { z } from "zod";
import { FileWithStringType } from "./image-schema";
import { Gender, UserRole } from "../types/user-type";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
);

export const UserProfileSchema = z.object({
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
    .regex(/^(98|97)\d{8}$/, {
      message: "Enter valid phone number",
    })
    .optional(),
  email: z.string().email(),
  password: z.string().regex(passwordValidation, {
    message:
      "Password must have atleast one small and capital letter, number and special character",
  }),
  role: z.nativeEnum(UserRole),
  gender: z.nativeEnum(Gender),
  image: FileWithStringType,
  dob: z.string(),
});

export const UserProfileDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  image: "",
  gender: undefined,
  role: "user" as UserRole,
};

export type UserProfileType = z.infer<typeof UserProfileSchema>;

// Define a type for a single field in the UserProfileFields array
type UserProfileField = {
  fieldId: string;
  label: string;
  placeholder: string;
  required: boolean;
  fieldTag: "input" | "select"; // Define the possible field tags
  type: string; // Optional for input fields
  options?: { value: string; label: string }[]; // Optional for select fields
};

// Define the UserProfileFields array with the specified type
export const UserProfileFields: UserProfileField[] = [
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
    fieldId: "role",
    label: "Role",
    placeholder: "Select Role",
    required: true,
    fieldTag: "select",
    options: Object.keys(UserRole).map((key) => ({
      value: key,
      label: UserRole[key as keyof typeof UserRole],
    })),
    type: "select",
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
    fieldId: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true,
    fieldTag: "input",
    type: "password",
  },
];
