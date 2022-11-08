import { PagesRouteConfig } from "~/@main/types/Config-Types";
import DashboardPage from "./DashboardPage";

//Every Page Configs This one could take more like mamin layout setting for this page "not using it here"
//routing like this is full ready for auth and setting system.

const DashboardConfig: PagesRouteConfig = {
  routes: [
    {
      path: "dashboard",
      element: <DashboardPage />,
    },
  ],
};

export default DashboardConfig;
