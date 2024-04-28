import { createBrowserRouter } from "react-router-dom";
import OverviewPage from "./pages/overview/page";
import SettingsPage from "./pages/settings/page";
import UsersPage from "./pages/users/page";
import EventPage from "./pages/events/page";
import DonarsPage from "./pages/donars/page";
import OrganizationPage from "./pages/organizations/page";
import VolunteerPage from "./pages/volunteer/page";
import DonationHistoryPage from "./pages/donation-history/page";
import BookDonationAppoinmentPage from "./pages/book-appoinment/page";
import FAQPage from "./pages/faq/page";
import SignInPage from "./pages/signin/page";
import AdminProtectedRoute from "./components/hoc/protected-routes/admin-protected-route";
import DonarProtectedRoute from "./components/hoc/protected-routes/donar-protected-route";
import GlobalProtectedRoute from "./components/hoc/protected-routes/global-protected-route";
import PublicRoute from "./components/hoc/protected-routes/public-route";
import Appoinments from "./pages/appoinments/page";
import NotFoundPage from "./pages/not-found/page";
import AddNewUserPage from "./pages/users/add-new-user/page";

const adminOnlyRoutes = [
  // Only admin can access this routes
  {
    path: "/donars",
    element: <DonarsPage />,
  },
  {
    path: "/volunteers",
    element: <VolunteerPage />,
  },
  {
    path: "/appointments",
    element: <Appoinments />,
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
    path: "/users/add-new",
    element: <AddNewUserPage />,
  },
];

const donarOnlyRoutes = [
  // Only donars can access this routes

  {
    path: "/donation-history",
    element: <DonationHistoryPage />,
  },

  {
    path: "/book-appointment",
    element: <BookDonationAppoinmentPage />,
  },
];

const loggedInPublicRoute = [
  // Any loggedin user can access this routes
  {
    path: "/overview",
    element: <OverviewPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },

  {
    path: "/faq",
    element: <FAQPage />,
  },

  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
];

const authRoutes = [
  {
    path: "/",
    element: <SignInPage />,
  },
];

export const router = createBrowserRouter([
  {
    element: <GlobalProtectedRoute />,
    children: [
      ...loggedInPublicRoute,
      {
        element: <AdminProtectedRoute />,
        children: [...adminOnlyRoutes],
      },
      {
        element: <DonarProtectedRoute />,
        children: [...donarOnlyRoutes],
      },
    ],
  },

  {
    element: <PublicRoute />,
    children: [...authRoutes],
  },
]);
