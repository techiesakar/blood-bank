import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getFirstName } from "@/lib/typo-utils";
import { ChevronDown } from "lucide-react";

export const ProfileToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:outline-none">
        <div className="flex items-center gap-2 ml-2 ">
          <Avatar className="border-primary border p-0.5">
            <AvatarImage src="./avatar.png" />
            <AvatarFallback>
              <AvatarImage src="./avatar.png" />
            </AvatarFallback>
          </Avatar>

          <div className=" lg:flex gap-x-1 hidden items-center  ">
            <div className="flex flex-col flex-1">
              <span className="font-semibold text-xs">
                {getFirstName("Sakar Aryal")}
              </span>
              <span className=" text-typolight text-xs">Admin</span>
            </div>
            <ChevronDown className="size-4 text-typolight" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
