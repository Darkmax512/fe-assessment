import { NavigationConfigTypes } from "~/@main/types/Config-Types";

const navigationConfig: NavigationConfigTypes[] = [
  {
    id: "Dashboard-page",
    title: "Dashboard",
    translate: "DASHBOARD",
    type: "item",
    icon: "Squares2X2Icon:outline",
    url: "dashboard",
  },
  {
    id: "Cars-page",
    title: "Cars",
    translate: "CARS",
    type: "item",
    icon: "AcademicCapIcon:outline",
    url: "booking",
  },
];

export const utilsNavigationConfig: NavigationConfigTypes[] = [
  {
    id: "Settings-page",
    title: "Settings",
    translate: "SETTINGS",
    type: "item",
    icon: "Cog6ToothIcon:outline",
    url: "settings",
  },
  {
    id: "Logout-page",
    title: "Logout",
    translate: "LOGOUT",
    type: "item",
    icon: "ArrowLeftOnRectangleIcon:outline",
    url: "Logout",
  },
];

export default navigationConfig;
