import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppIcons from "~/@main/core/AppIcons";
import { NavigationConfigTypes } from "~/@main/types/Config-Types";
import clsx from "clsx";

type Props = {
  item: NavigationConfigTypes;
  onClick?: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavItem = ({ item, onClick }: Props) => {
  const { pathname } = useLocation();
  return (
    <Link
      key={item.id}
      to={item.url}
      onClick={() => onClick && onClick(false)}
      className={clsx(
        item.url === pathname.substring(1)
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
      )}
    >
      <AppIcons
        icon={item.icon}
        className={clsx(
          item.current
            ? "text-gray-500"
            : "text-gray-400 group-hover:text-gray-500",
          "mr-4 flex-shrink-0 h-6 w-6"
        )}
      />
      {item.title}
    </Link>
  );
};

export default NavItem;
