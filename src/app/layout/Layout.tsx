import AppSuspense from "~/@main/core/AppSuspense";
import { memo, PropsWithChildren } from "react";
import { useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Toolbar from "./components/Toolbar";
import routes from "../configs/routesConfig";

import { useState } from "react";
import AppIcons from "~/@main/core/AppIcons";

type Props = {};

const Layout = (props: PropsWithChildren<Props>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <AppIcons
                icon="Bars3BottomLeftIcon:outline"
                className="h-6 w-6"
              />
            </button>
            <Toolbar />
          </div>
          <main className="flex-1">
            <AppSuspense>{useRoutes(routes)}</AppSuspense>
            {props.children}
          </main>
        </div>
      </div>
    </>
  );
};

export default memo(Layout);
