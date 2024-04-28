import CrudHeaderLayout from "@/components/hoc/crud-header-layout";

const OrganizationPage = () => {
  return (
    <CrudHeaderLayout
      title="All Organizations"
      addBtn={true}
      path="/organizations/add-new"
      buttonLabel="Add New"
    >
      Hello
    </CrudHeaderLayout>
  );
};

export default OrganizationPage;
