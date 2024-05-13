import { useMenuStatus } from "@/components/hoc/menu-context";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/tailwind-utils";
import { Search } from "lucide-react";

export const SearchInput = () => {
  const { isActive } = useMenuStatus();
  return (
    <div
      className={cn(
        "border rounded-lg relative max-w-[720px] w-full px-2 py-1 flex items-center justify-center h-10",
        isActive && "sm:flex hidden"
      )}
    >
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-typolight size-4" />
      <Input
        placeholder="Search..."
        className="w-full h-6 placeholder:text-sm  border-0 outline-offset-0 outline-none focus-visible:ring-offset-0 px-6 focus-visible:ring-0"
      />
    </div>
  );
};
