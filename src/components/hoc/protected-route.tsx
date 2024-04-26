import { Outlet } from "react-router-dom";
import DashboardWrapper from "./dashboard-wrapper";
import { MenuContextProvider } from "./menu-context";

const ProtectedRoute = () => {
  return (
    <MenuContextProvider>
      <div>
        <DashboardWrapper>
          <Outlet />
        </DashboardWrapper>
      </div>
    </MenuContextProvider>
  );
};

export default ProtectedRoute;
