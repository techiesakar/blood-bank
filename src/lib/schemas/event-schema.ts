import { z } from "zod";

export const EventSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z\s]+$/),

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
  mapLink: z.string().url(),
});

export const EventDefaultValues = {
  name: "",
  mapLink: "",
  province: "",
  district: "",
  municipality: "",
};

export type EventType = z.infer<typeof EventSchema>;

// Define a type for a single field in the EventFields array
type EventField = {
  fieldId: string;
  label: string;
  placeholder?: string;
  required: boolean;
  fieldTag?: "input" | "select"; // Define the possible field tags
  type: string; // Optional for input fields
  options?: { value: string; label: string }[]; // Optional for select fields
  profileImage?: File | string | undefined;
};

// Define the EventFields array with the specified type
export const EventFields: EventField[] = [
  {
    fieldId: "name",
    label: "Event Name",
    placeholder: "Enter Event Name",
    required: true,
    fieldTag: "input",
    type: "text",
  },
  {
    fieldId: "mapLink",
    label: "Map Link",
    placeholder: "Enter Map Link",
    required: true,
    fieldTag: "input",
    type: "url",
  },

  {
    fieldId: "address",
    label: "Address",
    required: true,
    type: "address",
  },

  {
    fieldId: "organization",
    label: "Organization",
    required: true,
    type: "select",
    options: [{ value: "1", label: "Butwal Multiple Campus" }],
    placeholder: "Choose Organization",
  },
];
