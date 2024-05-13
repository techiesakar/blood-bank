import { DataTable } from "@/components/ui/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { useFetch } from "@/hooks/queryFn";
import { donorColumn } from "./donor-table-columns";
import { useMemo } from "react";

interface IDonor {
  address: {
    district: string;
    province: string;
    municipality: string;
  };
}

export const DonorTable = () => {
  const { data } = useFetch("/donors");

  const filteredData = useMemo(
    () =>
      data?.map((item: IDonor) => ({
        ...item,
        district: item.address.district,
        municipality: item.address.municipality,
        province: item.address.province,
      })),
    [data]
  );

  return (
    <Card>
      <CardContent>
        <DataTable
          data={filteredData || []}
          columns={donorColumn}
          deletePath="/donors/deletemany"
        />
      </CardContent>
    </Card>
  );
};
