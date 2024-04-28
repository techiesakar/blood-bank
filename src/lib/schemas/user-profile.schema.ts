import { z } from "zod";
import { UserRole } from "../types/user.type";
import { FileWithStringType } from "./image-schema";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
);

export const UserProfileSchema = z
  .object({
    name: z
      .string()
      .min(3)
      .max(30)
      .regex(/^[a-zA-Z\s]+$/),
    phone: z
      .string()
      .regex(/^(98|97)\d{8}$/)
      .optional(),
    email: z.string().email(),
    password: z.string().regex(passwordValidation, {
      message:
        "Password must have atleast one small and capital letter, number and special character",
    }),
    role: z.nativeEnum(UserRole),
    image: FileWithStringType,
  })
  .refine((data) => {
    if (!/(?=.*[a-z])/.test(data.password)) {
      return {
        message: "Password must contain at least one lowercase letter.",
        path: ["password"],
      };
    }
    if (!/(?=.*[A-Z])/.test(data.password)) {
      throw new Error("Password must contain at least one uppercase letter.");
    }
  });

export const UserProfileDefaultValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  image: "",
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
    fieldId: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true,
    fieldTag: "input",
    type: "password",
  },
];
