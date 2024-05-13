import { DataTable } from "@/components/ui/table/data-table";
import { usersColumn } from "./user-table-columns";
import { Card, CardContent } from "@/components/ui/card";

export const UserTable = () => {
  return (
    <Card>
      <CardContent>
        <DataTable data={[]} columns={usersColumn} />
      </CardContent>
    </Card>
  );
};
