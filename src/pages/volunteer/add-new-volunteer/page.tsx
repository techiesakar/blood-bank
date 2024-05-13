import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { AddVolunteerForm } from "@/components/page-components/volunteers/add-volunteer-form";

const AddNewVolunteerPage = () => {
  return (
    <CrudHeaderLayout showGoBack>
      <AddVolunteerForm />
    </CrudHeaderLayout>
  );
};

export default AddNewVolunteerPage;
