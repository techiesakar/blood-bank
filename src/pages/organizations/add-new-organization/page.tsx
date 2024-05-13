import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { AddOrganizationForm } from "@/components/page-components/organizations/add-organization-form";

const AddNewOrganizationPage = () => {
  return (
    <CrudHeaderLayout showGoBack>
      <AddOrganizationForm />
    </CrudHeaderLayout>
  );
};

export default AddNewOrganizationPage;
