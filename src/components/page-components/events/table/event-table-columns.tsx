"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

type EventType = {
  id: string;
  name: string;
  organization: string;
  location: string;
  date: string;
};

export const eventsColumns: ColumnDef<
  EventType & {
    id: string;
  }
>[] = [
  {
    accessorKey: "SN",
    header: () => <div className=" font-medium">SN</div>,
    cell: ({ row }) => {
      return <div className="font-medium">{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "name",
    header: ({}) => <div className=" font-medium">Event Name</div>,
    cell: ({ row }) => {
      return (
        <Link to={`/events/blood-donation-hubit`} className="font-medium">
          {row.original.name}
        </Link>
      );
    },
  },
  {
    accessorKey: "organization",
    header: ({}) => <div className=" font-medium">Host</div>,
  },
  {
    accessorKey: "location",
    header: ({}) => <div className=" font-medium">Address</div>,
  },
  {
    accessorKey: "date",
    header: ({}) => <div className=" font-medium">Date</div>,
  },
];
