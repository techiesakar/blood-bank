import { Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  // This route protects other users from accessing admin route

  return <Outlet />;
};

export default AdminProtectedRoute;
