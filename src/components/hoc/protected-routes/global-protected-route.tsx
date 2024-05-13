import { Outlet } from "react-router-dom";

import { MenuContextProvider } from "../menu-context";
import DashboardWrapper from "../dashboard-wrapper";

const GlobalProtectedRoute = () => {
  return (
    <MenuContextProvider>
      <DashboardWrapper>
        <Outlet />
      </DashboardWrapper>
    </MenuContextProvider>
  );
};

export default GlobalProtectedRoute;
