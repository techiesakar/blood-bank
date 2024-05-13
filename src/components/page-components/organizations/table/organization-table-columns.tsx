"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { OrganizationProfileType } from "@/lib/schemas/organization-profile.schema";
import { ColumnDef } from "@tanstack/react-table";

export const organizationsColumn: ColumnDef<
  OrganizationProfileType & {
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
    cell: ({ row }) => <div className="font-medium">{row.id + 1}</div>,
  },
  {
    accessorKey: "name",
    header: ({}) => <div className=" font-medium">Name</div>,
  },
  {
    accessorKey: "email",
    header: ({}) => <div className=" font-medium">Email</div>,
  },
  {
    accessorKey: "contact",
    header: ({}) => <div className=" font-medium">Phone</div>,
  },
  {
    accessorKey: "representativeContact",
    header: ({}) => <div className=" font-medium">Alternate Phone</div>,
  },
];
