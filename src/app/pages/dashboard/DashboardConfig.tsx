import { PagesRouteConfig } from "~/@main/types/Config-Types";
import DashboardPage from "./DashboardPage";

const DashboardConfig: PagesRouteConfig = {
  routes: [
    {
      path: "dashboard",
      element: <DashboardPage />,
    },
  ],
};

export default DashboardConfig;
