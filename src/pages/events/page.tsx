import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { EventTable } from "@/components/page-components/events/table/event-table";

const EventPage = () => {
  return (
    <CrudHeaderLayout
      title="All Events"
      addBtn={true}
      path="/events/add-new"
      buttonLabel="Add New"
    >
      <EventTable />
    </CrudHeaderLayout>
  );
};

export default EventPage;
