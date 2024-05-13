import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { UserTable } from "@/components/page-components/users/table/user-table";

const DonationPage = () => {
  return (
    <CrudHeaderLayout
      title="All Donations"
      addBtn={true}
      path="/donations/add-new"
      buttonLabel="Add New"
    >
      <UserTable />
    </CrudHeaderLayout>
  );
};

export default DonationPage;
