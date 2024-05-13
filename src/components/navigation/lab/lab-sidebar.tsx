import { NavItem } from "../sidebar/nav-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { labSidebarData } from "./sidebar-data";

export const LabSidebar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Useful Links</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {labSidebarData.map((item, i) => {
          return (
            <NavItem
              key={i}
              icon={item.icon}
              label={item.label}
              path={item.path}
              fontSize="text-base"
            />
          );
        })}
      </CardContent>
    </Card>
  );
};
