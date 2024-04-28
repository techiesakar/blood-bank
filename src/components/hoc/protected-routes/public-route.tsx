import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../auth-context";

const PublicRoute = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/overview", {
        replace: true,
      });
    }
  }, [navigate, user]);

  return <Outlet />;
};

export default PublicRoute;
