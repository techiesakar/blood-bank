import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { AddUserForm } from "@/components/page-components/users/add-user-form";

const AddNewUserPage = () => {
  return (
    <CrudHeaderLayout showGoBack>
      <AddUserForm />
    </CrudHeaderLayout>
  );
};

export default AddNewUserPage;
