import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import React from "react";
import { useAxios } from "@/hooks/useAxios";

interface DataTableViewOptionsProps<TData extends { id: string }> {
  table: Table<TData>;
  deletePath?: string;
}

export function DataTableViewOptions<TData extends { id: string }>({
  table,
  deletePath,
}: DataTableViewOptionsProps<TData>) {
  const axiosInstance = useAxios();
  const [loading, setLoading] = React.useState(false);
  console.log(loading);
  const deleteHandler = async () => {
    try {
      setLoading(true);
      const getSelectedIds = table
        .getGroupedSelectedRowModel()
        .rows.map((item) => item.original.id);
      const response = await axiosInstance.post(`${deletePath}`, {
        ids: JSON.stringify(getSelectedIds),
      });

      if (response.status == 200) {
        toast.success("Deleted successfully");
        // queryClient.invalidateQueries();
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex gap-x-3 ml-auto">
      {deletePath?.length &&
        (table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()) && (
          <></>
        )}

      {table.getSelectedRowModel().rows.length > 0 && (
        <Button
          variant="destructive"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={() => deleteHandler()}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Trash
          <span className="text-white ml-2">
            ({table.getSelectedRowModel().rows.length})
          </span>
        </Button>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto hidden h-8 lg:flex"
          >
            <MixerHorizontalIcon className="mr-2 h-4 w-4" />
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px]">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
            )
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
