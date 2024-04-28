import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../auth-context";
import { MenuContextProvider } from "../menu-context";
import DashboardWrapper from "../dashboard-wrapper";

const GlobalProtectedRoute = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) {
        if (retryCount < 3) {
          setRetryCount(retryCount + 1);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
          navigate("/", {
            replace: true,
          });
        }
      }
    };

    fetchUser();
  }, [user, retryCount]); // Re-run the effect when user data or retry count changes

  return (
    <MenuContextProvider>
      <DashboardWrapper>
        <Outlet />
      </DashboardWrapper>
    </MenuContextProvider>
  );
};

export default GlobalProtectedRoute;
