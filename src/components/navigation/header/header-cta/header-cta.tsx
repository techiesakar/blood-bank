import { Button } from "@/components/ui/button";
import { Bell, Settings } from "lucide-react";
import { ProfileToggle } from "./profile-toggle";

export const HeaderCTA = () => {
  return (
    <div className="flex gap-x-3 ml-auto">
      {/* Settings */}
      <Button
        size="icon"
        variant="outline"
        className="rounded-xl group lg:flex hidden"
      >
        <Settings className="text-typolight size-4 group-hover:text-primary" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="rounded-xl group lg:flex hidden relative"
      >
        <Bell className="text-typolight size-4 group-hover:text-primary" />
        <span className="text-white flex items-center justify-center absolute p-1  size-5 text-[10px] bg-primary rounded-full top-0 right-0 translate-x-1/2 ">
          4+
        </span>
      </Button>
      <ProfileToggle />
    </div>
  );
};
