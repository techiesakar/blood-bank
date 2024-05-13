import { cn } from "@/lib/utils/tailwind-utils";
import { useMenuStatus } from "./menu-context";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isActive } = useMenuStatus();
  return (
    <div>
      {/* Main Wrapper */}
      <div className="flex">
        <div className={cn("lg:w-sidebar w-16", !isActive && "close")}></div>
        <main className="flex-1 p__wrapper py-6 bg-muted h-[calc(100dvh-56px)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainWrapper;
