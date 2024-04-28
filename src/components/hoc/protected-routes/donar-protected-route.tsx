import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../auth-context";

const DonarProtectedRoute = () => {
  // This route protects other users from accessing donar route

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
      } else {
        if (user.role !== "user") {
          navigate("/not-found", {
            replace: true,
          });
        }
      }
    };

    fetchUser();
  }, [user, retryCount]);

  return <Outlet />;
};

export default DonarProtectedRoute;
