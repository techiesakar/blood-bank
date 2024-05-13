import { Checkbox } from "@/components/ui/checkbox";
import { DonorProfileType } from "@/lib/schemas/donor-profile.schema";
import { ColumnDef } from "@tanstack/react-table";
import { FaFemale, FaMale } from "react-icons/fa";
export const donorColumn: ColumnDef<
  DonorProfileType & {
    id: string;
  }
>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "SN",
    header: () => <div className=" font-medium">SN</div>,
    cell: ({ row }) => <div className="font-medium">{row.index + 1}</div>,
  },
  {
    accessorKey: "firstName",
    header: ({}) => <div className=" font-medium">Name</div>,
    cell: ({ row }) => {
      const donor = row.original;
      const fullName = donor.firstName + " " + donor.lastName;
      return <div className=" font-medium capitalize">{fullName}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({}) => <div className=" font-medium">Email</div>,
  },
  {
    accessorKey: "phone",
    header: ({}) => <div className=" font-medium">Phone</div>,
  },

  {
    accessorKey: "bloodgroup",
    header: ({}) => <div className=" font-medium">Blood Group</div>,
    cell: ({ row }) => {
      const donor = row.original;
      const rhFactor = donor.rhFactor === "positive" ? "+" : "-";
      const bloodGroup = donor.bloodType + " " + rhFactor;
      return <div className=" font-medium capitalize">{bloodGroup}</div>;
    },
  },
  {
    accessorKey: "religion",
    header: ({}) => <div className=" font-medium">Religion</div>,
  },
  {
    accessorKey: "race",
    header: ({}) => <div className=" font-medium">Race</div>,
  },

  {
    accessorKey: "gender",
    header: ({}) => <div className=" font-medium">Gender</div>,
    cell: ({ row }) => {
      const donor = row.original;
      const Icon =
        donor.gender === "male" ? (
          <FaMale className="text-xl" />
        ) : (
          <FaFemale className="text-xl" />
        );
      return (
        <div className=" capitalize flex">
          {Icon}
          <span>{donor.gender}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "district",
    header: ({}) => <div className=" font-medium">District</div>,
  },
];
