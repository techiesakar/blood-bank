import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { OrganizationTable } from "@/components/page-components/organizations/table/organization-table";

const OrganizationPage = () => {
  return (
    <CrudHeaderLayout
      title="All Organizations"
      addBtn={true}
      path="/organizations/add-new"
      buttonLabel="Add New"
    >
      <OrganizationTable />
    </CrudHeaderLayout>
  );
};

export default OrganizationPage;
