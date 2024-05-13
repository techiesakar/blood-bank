import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import LabLayout from "@/components/hoc/lab-layout";
import { UserTable } from "@/components/page-components/users/table/user-table";

const LabReportPage = () => {
  return (
    <CrudHeaderLayout
      title="Blood Reports"
      addBtn={true}
      path="/reports/add-new"
      buttonLabel="Generate New"
    >
      <LabLayout>
        <UserTable />
      </LabLayout>
    </CrudHeaderLayout>
  );
};

export default LabReportPage;
