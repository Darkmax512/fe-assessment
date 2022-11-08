import AppUtils from "~/@main/utils/AppUtils";
import { Navigate } from "react-router-dom";
import { AppRouteObject, PagesRouteConfig } from "~/@main/types/Config-Types";
import DashboardConfig from "../pages/dashboard/DashboardConfig";
import BookingConfig from "../pages/booking/BookingConfig";

const routeConfigs: PagesRouteConfig[] = [DashboardConfig, BookingConfig];

const routes: AppRouteObject[] = [
  ...AppUtils.generateRoutesFromConfigs(routeConfigs, []),
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
];

export default routes;
