import {
  Building,
  CalendarDays,
  HeartHandshake,
  LayoutDashboard,
  Settings,
  Users,
  Syringe,
  History,
  CalendarCheck,
  Droplet,
  CircleHelp,
} from "lucide-react";

export const adminSidebarData = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    path: "/overview",
  },

  {
    label: "Appointments",
    icon: Droplet,
    path: "/appointments",
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
    label: "Donars",
    icon: HeartHandshake,
    path: "/donars",
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

export const donarSidebarData = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    path: "/overview",
  },

  {
    label: "Events",
    icon: CalendarDays,
    path: "/events",
  },

  {
    label: "Donation History",
    icon: History,
    path: "/donation-history",
  },
  {
    label: "Book Appointment",
    icon: CalendarCheck,
    path: "/book-appointment",
  },
  {
    label: "FAQ",
    icon: CircleHelp,
    path: "/faq",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "settings",
  },
];
