import {
  Building,
  CalendarDays,
  HeartHandshake,
  LayoutDashboard,
  Settings,
  Users,
  Syringe,
} from "lucide-react";

export const sidebarData = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    path: "/overview",
  },
  {
    label: "Donars",
    icon: HeartHandshake,
    path: "/donars",
  },

  {
    label: "Events",
    icon: CalendarDays,
    path: "/events",
  },
  {
    label: "Organizations",
    icon: Building,
    path: "/organizations",
  },
  {
    label: "Volunteers",
    icon: Syringe,
    path: "/volunteers",
  },
  {
    label: "Users",
    icon: Users,
    path: "/users",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "settings",
  },
];
