import BannerImage from "@/assets/login-banner1.png";
// import BannerImage from "@/assets/bg-1.png";

export const SignInBanner = () => {
  return (
    <div className="lg:block hidden">
      <img src={BannerImage} />
    </div>
  );
};
