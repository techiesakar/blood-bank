import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().min(3).max(30),
  password: z.string().min(3).max(30),
});

export type LoginType = z.infer<typeof LoginFormSchema>;

export const LoginFields = [
  {
    fieldId: "email",
    label: "Email",
    placeholder: "Enter email",
    type: "text",
  },
  {
    fieldId: "password",
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
];
