import { DataTable } from "@/components/ui/table/data-table";
import { Card, CardContent } from "@/components/ui/card";
import { eventsColumns } from "./event-table-columns";
import { eventData } from "./event-dummy-data";

export const EventTable = () => {
  return (
    <Card>
      <CardContent>
        <DataTable data={eventData} columns={eventsColumns} />
      </CardContent>
    </Card>
  );
};
