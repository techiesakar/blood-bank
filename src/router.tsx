import { createBrowserRouter } from "react-router-dom";
import OverviewPage from "./pages/overview/page";
import SettingsPage from "./pages/settings/page";
import UsersPage from "./pages/users/page";
import EventPage from "./pages/events/page";
import DonorsPage from "./pages/donors/page";
import OrganizationPage from "./pages/organizations/page";
import VolunteerPage from "./pages/volunteer/page";
import DonationHistoryPage from "./pages/donation-history/page";
import FAQPage from "./pages/faq/page";
import SignInPage from "./pages/signin/page";
import AdminProtectedRoute from "./components/hoc/protected-routes/admin-protected-route";
import GlobalProtectedRoute from "./components/hoc/protected-routes/global-protected-route";
import PublicRoute from "./components/hoc/protected-routes/public-route";
import Appoinments from "./pages/appoinments/page";
import NotFoundPage from "./pages/not-found/page";
import AddNewUserPage from "./pages/users/add-new-user/page";
import AddNewDonorPage from "./pages/donors/add-new-donor/page";
import AddNewVolunteerPage from "./pages/volunteer/add-new-volunteer/page";
import AddNewOrganizationPage from "./pages/organizations/add-new-organization/page";
import AddNewEventPage from "./pages/events/add-new-event/page";
import DonationPage from "./pages/donations/page";
import AddNewDonationPage from "./pages/donations/add-new-donation/page";
import DonorProtectedRoute from "./components/hoc/protected-routes/donor-protected-route";
import LabReportPage from "./pages/lab/reports/page";
import AddNewLabReportPage from "./pages/lab/reports/add-new-lab-report/page";
import LabPage from "./pages/lab/page";
import BloodPage from "./pages/lab/blood/page";
import TestCases from "./pages/lab/test-cases/page";
import SingleEventPage from "./pages/events/single-event/page";

const adminOnlyRoutes = [
  // Only admin can access this routes
  {
    path: "/donors",
    element: <DonorsPage />,
  },

  {
    path: "/donors/add-new",
    element: <AddNewDonorPage />,
  },

  {
    path: "/reports/add-new",
    element: <AddNewLabReportPage />,
  },

  {
    path: "/lab",
    element: <LabPage />,
  },

  {
    path: "/lab/reports",
    element: <LabReportPage />,
  },

  {
    path: "/lab/blood",
    element: <BloodPage />,
  },

  {
    path: "/lab/test-cases",
    element: <TestCases />,
  },
  {
    path: "/donations",
    element: <DonationPage />,
  },

  {
    path: "/donations/add-new",
    element: <AddNewDonationPage />,
  },

  {
    path: "/volunteers",
    element: <VolunteerPage />,
  },

  {
    path: "/volunteers/add-new",
    element: <AddNewVolunteerPage />,
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
    path: "/organizations/add-new",
    element: <AddNewOrganizationPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },

  {
    path: "/users/add-new",
    element: <AddNewUserPage />,
  },

  {
    path: "/events/add-new",
    element: <AddNewEventPage />,
  },
];

const donorOnlyRoutes = [
  // Only donors can access this routes

  {
    path: "/donation-history",
    element: <DonationHistoryPage />,
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
    path: "/events/:eventId",
    element: <SingleEventPage />,
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
        element: <DonorProtectedRoute />,
        children: [...donorOnlyRoutes],
      },
    ],
  },

  {
    element: <PublicRoute />,
    children: [...authRoutes],
  },
]);
