"use client";

import { UserProfileType } from "@/lib/schemas/user-profile.schema";
import { ColumnDef } from "@tanstack/react-table";

export const usersColumn: ColumnDef<UserProfileType>[] = [
  {
    accessorKey: "SN",
    header: () => <div className=" font-medium">SN</div>,
    cell: ({ row }) => <div className="font-medium">{row.id + 1}</div>,
  },
  {
    accessorKey: "Name",
    header: ({}) => <div className=" font-medium">Name</div>,
  },
  {
    accessorKey: "Email",
    header: ({}) => <div className=" font-medium">Email</div>,
  },
  {
    accessorKey: "Role",
    header: ({}) => <div className=" font-medium">Role</div>,
  },
];
