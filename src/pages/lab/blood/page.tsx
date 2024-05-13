import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import LabLayout from "@/components/hoc/lab-layout";
import { UserTable } from "@/components/page-components/users/table/user-table";

const BloodPage = () => {
  return (
    <CrudHeaderLayout title="Blood Inventory">
      <LabLayout>
        <UserTable />
      </LabLayout>
    </CrudHeaderLayout>
  );
};

export default BloodPage;
