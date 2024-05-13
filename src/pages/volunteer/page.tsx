import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { UserTable } from "@/components/page-components/users/table/user-table";

const VolunteerPage = () => {
  return (
    <CrudHeaderLayout
      title="All Volunteers"
      addBtn={true}
      path="/volunteers/add-new"
      buttonLabel="Add New Volunteer"
    >
      <UserTable />
    </CrudHeaderLayout>
  );
};

export default VolunteerPage;
