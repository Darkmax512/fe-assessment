import { IconName } from "~/@main/core/AppIcons/AppIcons";
import { RouteObject } from "react-router-dom";

export interface NavigationConfigTypes {
  id: string;
  title: string;
  translate: string;
  type: string;
  icon: `${IconName}:${"outline" | "solid"}`;
  url: string;
  current?: boolean;
}

export type AppRouteObject = RouteObject & {
  auth?: string[];
  settings?: object;
};

export interface PagesRouteConfig {
  settings?: object;
  auth?: string[];
  routes: AppRouteObject[];
}
