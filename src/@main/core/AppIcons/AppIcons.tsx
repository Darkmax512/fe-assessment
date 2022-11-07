import { FC } from "react";
import * as HIconsSolid from "@heroicons/react/24/solid";
import * as HIconsOutline from "@heroicons/react/24/outline";

export type IconName = keyof typeof HIconsSolid | keyof typeof HIconsOutline;

const AppIcons: FC<{
  icon: `${IconName}:${"outline" | "solid"}`;
  className?: string;
}> = ({ icon, className }) => {
  const [iconName, varient] = icon.split(":");
  const { ...icons } = varient === "outline" ? HIconsOutline : HIconsSolid;
  // @ts-ignore
  const TheIcon: JSX.Element = icons[iconName];
  /* @ts-ignore */
  return <TheIcon className={className} aria-hidden="true" />;
};

export default AppIcons;
