import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { AddEventForm } from "@/components/page-components/events/add-event-form";

const AddNewEventPage = () => {
  return (
    <CrudHeaderLayout showGoBack>
      <AddEventForm />
    </CrudHeaderLayout>
  );
};

export default AddNewEventPage;
