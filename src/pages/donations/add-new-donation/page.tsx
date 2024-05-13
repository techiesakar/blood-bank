import CrudHeaderLayout from "@/components/hoc/crud-header-layout";
import { AddDonationForm } from "@/components/page-components/donations/add-donation-form";

const AddNewDonationPage = () => {
  return (
    <CrudHeaderLayout showGoBack>
      <AddDonationForm />
    </CrudHeaderLayout>
  );
};

export default AddNewDonationPage;
