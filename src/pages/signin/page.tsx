// import { SignInBanner } from "@/components/page-components/signin/signin-banner";
// import { SignInForm } from "@/components/page-components/signin/signin-form";
import { Navigate } from "react-router-dom";

const SignInPage = () => {
  // const navigate = useNavigate();
  // navigate("/overview", {
  //   replace: true,
  // });

  return (
    // <div className="">
    //   <div className="w-full h-[100dvh] grid grid-cols-2 max-w-[1020px] mx-auto place-content-center place-items-center gap-10 p-8">
    //     <SignInForm />
    //     <SignInBanner />
    //   </div>
    // </div>
    <Navigate to={"/overview"} />
  );
};

export default SignInPage;
