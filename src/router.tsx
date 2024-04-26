import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/hoc/protected-route";
import OverviewPage from "./pages/overview/page";
import SettingsPage from "./pages/settings/page";
import UsersPage from "./pages/users/page";
import EventPage from "./pages/events/page";
import DonarsPage from "./pages/donars/page";
import OrganizationPage from "./pages/organizations/page";
import VolunteerPage from "./pages/volunteer/page";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/overview",
        element: <OverviewPage />,
      },
      {
        path: "/donars",
        element: <DonarsPage />,
      },
      {
        path: "/volunteers",
        element: <VolunteerPage />,
      },
      {
        path: "/events",
        element: <EventPage />,
      },
      {
        path: "/organizations",
        element: <OrganizationPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
