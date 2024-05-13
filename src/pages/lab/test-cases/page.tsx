import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import LabLayout from "@/components/hoc/lab-layout";

const TestCases = () => {
  return (
    <CrudHeaderLayout title="Test Cases" buttonLabel="Add New">
      <LabLayout>
        <></>
      </LabLayout>
    </CrudHeaderLayout>
  );
};

export default TestCases;
