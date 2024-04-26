import { Play } from "lucide-react";
import { NavItem } from "./nav-item";
import { sidebarData } from "./sidebar-data";
import { Button } from "@/components/ui/button";
import { useMenuStatus } from "@/components/hoc/menu-context";
import { cn } from "@/lib/utils/tailwind-utils";

export const Sidebar = () => {
  const { isActive, setIsActive } = useMenuStatus();
  return (
    <div className="fixed  h-full  inset-y-0 z-1000 border-r bg-background">
      <div
        className={cn(
          "flex h-full flex-col w-sidebar",
          !isActive ? "close" : ""
        )}
      >
        <div className="h-header w-full px-3 border-b flex items-center py-6">
          <img
            src="./long-logo.jpg"
            className={cn("h-8 lg:block hidden", !isActive && "lg:hidden")}
          />

          <img
            src="./logo-icon.png"
            className={cn("size-10 lg:hidden", !isActive && "lg:block")}
          />
        </div>
        <aside className="flex-1  bg-background py-6 flex flex-col gap-1">
          {sidebarData.map((item) => {
            return (
              <NavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                path={item.path}
              />
            );
          })}

          <div className="flex items-center absolute bottom-4 right-0 translate-x-1/2 transition-all duration-300 ease-linear">
            <Button
              type="button"
              onClick={() => setIsActive(!isActive)}
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full p-0 transition-all ease-linear size-8 bg-primary hover:bg-primary/80  ",
                isActive && "rotate-180"
              )}
            >
              <Play className="size-4 text-white" />
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
};
