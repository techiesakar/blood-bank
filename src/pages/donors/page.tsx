import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { DonorTable } from "@/components/page-components/donors/table/donor-table";

const DonorsPage = () => {
  return (
    <CrudHeaderLayout
      title="All Donors"
      addBtn={true}
      path="/donors/add-new"
      buttonLabel="Add New Donor"
    >
      <DonorTable />
    </CrudHeaderLayout>
  );
};

export default DonorsPage;
