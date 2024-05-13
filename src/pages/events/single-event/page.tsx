import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import EventLayout from "@/components/hoc/event-layout";
import { EventBody } from "@/components/page-components/events/single-event/event-body";
import { EventHeader } from "@/components/page-components/events/single-event/event-header";

const SingleEventPage = () => {
  return (
    <CrudHeaderLayout showGoBack>
      <EventLayout>
        <EventHeader />
        <EventBody />
      </EventLayout>
    </CrudHeaderLayout>
  );
};

export default SingleEventPage;
