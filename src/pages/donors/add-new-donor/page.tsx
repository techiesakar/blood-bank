import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { AddDonorForm } from "@/components/page-components/donors/add-donor-form";

const AddNewDonorPage = () => {
  return (
    <CrudHeaderLayout showGoBack>
      <AddDonorForm />
    </CrudHeaderLayout>
  );
};

export default AddNewDonorPage;
