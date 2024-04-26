import { useMenuStatus } from "@/components/hoc/menu-context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils/tailwind-utils";
import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  icon: LucideIcon;
  label: string;
  path: string;
};
export const NavItem = ({ icon, label, path }: Props) => {
  const { isActive: menuActive } = useMenuStatus();
  const { pathname } = useLocation();
  const isActive = pathname.includes(path);
  const Icon = icon;
  return (
    <div className="flex items-center px-2">
      <TooltipProvider delayDuration={200} skipDelayDuration={400}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to={path}
              className={cn(
                "flex items-center hover:bg-slate-100 transition-all border-l-4 border-transparent  duration-200 ease-linear py-3 w-full group rounded-lg",
                isActive && "bg-slate-100 text-primary border-primary"
              )}
            >
              <div className="pl-3 flex items-center">
                <Icon
                  className={cn(
                    "size-5 text-typolight group-hover:text-primary transition-all ease-linear duration-200",
                    isActive && "text-primary"
                  )}
                />
              </div>

              <div
                className={cn(
                  "ml-3 capitalize text-sm group-hover:text-primary transition-all ease-linear duration-200 w-auto overflow-hidden opacity-100",
                  !menuActive && "w-0 opacity-0"
                )}
              >
                {label}
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className={cn(menuActive ? "lg:hidden" : "block")}
          >
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
