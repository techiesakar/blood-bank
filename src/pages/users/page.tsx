import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { UserTable } from "@/components/page-components/users/table/user-table";

const UsersPage = () => {
  return (
    <CrudHeaderLayout
      title="All Users"
      addBtn={true}
      path="/users/add-new"
      buttonLabel="Add New User"
    >
      <UserTable />
    </CrudHeaderLayout>
  );
};

export default UsersPage;
