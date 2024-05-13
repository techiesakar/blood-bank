import { cn } from "@/lib/utils/tailwind-utils";
import { HeaderCTA } from "./header-cta/header-cta";
import { SearchInput } from "./header-search-input/search-input";
import { useMenuStatus } from "@/components/hoc/menu-context";

export const Header = () => {
  const { isActive } = useMenuStatus();

  return (
    <header className="relative  bg-background border-b z-900">
      <div className="flex  items-center  justify-between">
        <div
          className={cn("w-sidebar  h-header  py-1", !isActive ? "close" : "")}
        />
        <div className="flex-1 h-header p__wrapper flex justify-between items-center">
          <SearchInput />
          <HeaderCTA />
        </div>
      </div>
    </header>
  );
};
