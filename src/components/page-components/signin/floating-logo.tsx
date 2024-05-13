import Logo from "@/assets/main-logo.jpg";
export const FloatingLogo = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full shadow-md p-4 border bg-white size-24">
      <img src={Logo} className="size-18" />
    </div>
  );
};
