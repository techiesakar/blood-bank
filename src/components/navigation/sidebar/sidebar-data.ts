import {
  Building,
  CalendarDays,
  HeartHandshake,
  LayoutDashboard,
  Settings,
  Users,
  History,
  CalendarCheck,
  CircleHelp,
  FlaskRound,
} from "lucide-react";

import { FaUserDoctor } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";

export const adminSidebarData = [
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
    label: "Organizations",
    icon: Building,
    path: "/organizations",
  },
  {
    label: "Donors",
    icon: HeartHandshake,
    path: "/donors",
  },

  {
    label: "Donation",
    icon: MdBloodtype,
    path: "/donations",
  },

  {
    label: "Lab",
    icon: FlaskRound,
    path: "/lab",
  },

  {
    label: "Volunteers",
    icon: FaUserDoctor,
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

export const donorSidebarData = [
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
