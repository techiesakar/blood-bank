import { DataTable } from "@/components/ui/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { organizationsColumn } from "./organization-table-columns";
import { useFetch } from "@/hooks/queryFn";

export const OrganizationTable = () => {
  const { data } = useFetch("/organizations");
  console.log(data);
  return (
    <Card>
      <CardContent>
        <DataTable
          data={data || []}
          columns={organizationsColumn}
          deletePath="/organizations/deletemany"
        />
      </CardContent>
    </Card>
  );
};
