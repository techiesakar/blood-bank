import { z } from "zod";

export enum DonationType {
  organization = "organization",
  individual = "individual",
}

export enum DonationStatus {
  PENDING = "pending",
  SUCCESS = "success",
  FAILED = "failed",
}
const Organization = [
  {
    value: "2868240-289258-285925-98989",
    label: "Butwal Multiple Campus",
  },
];

const Event = [
  {
    value: "2868240-289258-285925-98989",
    label: "Donation in Butwal Multiple Campus",
  },
];

export const DonationSchema = z.object({
  donor: z.string().uuid(),
  donation_event: z.string().uuid(),
  organization: z.string().uuid().optional(),
  donationType: z.nativeEnum(DonationType),
  bloodBagNo: z.string(),
});

export const DonationDefaultValues = {
  donor: "",
  donation_event: "",
  organization: "",
  donationType: DonationType.individual,
  bloodBagNo: "",
};

export type DonationFormType = z.infer<typeof DonationSchema>;

// Define a type for a single field in the DonorProfileFields array
type DonationField = {
  fieldId: string;
  label: string;
  placeholder?: string;
  required: boolean;
  fieldTag?: "input" | "select"; // Define the possible field tags
  type: string; // Optional for input fields
  options?: { value: string; label: string }[]; // Optional for select fields
  profileImage?: File | string | undefined;
  defaultValue?: string | undefined;
};

// Define the DonorProfileFields array with the specified type
export const useDonationFields = () => {
  const DonationFields: DonationField[] = [
    {
      fieldId: "bloodBagNo",
      label: "Blood Bag No",
      placeholder: "Enter Blood Bag No",
      required: true,
      fieldTag: "input",
      type: "text",
    },
    {
      fieldId: "organization",
      label: "Organization",
      placeholder: "Organization",
      required: false,
      fieldTag: "select",
      type: "select",
      options: Organization.map((item) => ({
        value: item.value,
        label: item.label,
      })),
    },

    {
      fieldId: "donor",
      label: "Donar",
      placeholder: "Donar",
      required: false,
      fieldTag: "select",
      type: "select",
      options: Event.map((item) => ({
        value: item.value,
        label: item.label,
      })),
    },

    {
      fieldId: "donation_event",
      label: "Event",
      placeholder: "Event",
      required: false,
      fieldTag: "select",
      type: "select",
      options: Event.map((item) => ({
        value: item.value,
        label: item.label,
      })),
    },

    {
      fieldId: "donationType",
      label: "Donation Type",
      placeholder: "Donation",
      required: true,
      fieldTag: "select",
      type: "select",
      defaultValue: DonationType.individual,
      options: Object.keys(DonationType).map((key) => ({
        value: key,
        label: DonationType[key as keyof typeof DonationType],
      })),
    },
  ];
  return DonationFields;
};
