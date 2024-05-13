import { useAuth } from "@/components/hoc/auth-provider";
import { SignInBanner } from "@/components/page-components/signin/signin-banner";
import { SignInForm } from "@/components/page-components/signin/signin-form";
import { useLocation, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { persist } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/overview";

  if (!persist) {
    return (
      <div className="">
        <div className="w-full h-[100dvh] grid grid-cols-2 max-w-[1020px] mx-auto place-content-center place-items-center gap-10 p-8">
          <SignInForm />
          <SignInBanner />
        </div>
      </div>
    );
  } else {
    navigate(from, {
      replace: true,
    });
  }
};

export default SignInPage;
