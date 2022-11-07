import React, { useState } from "react";
import AppIcons from "~/@main/core/AppIcons";
import { IconName } from "~/@main/core/AppIcons/AppIcons";
import RangeSVG from "./RangeSVG";

type Props = {
  color: string;
  percent: number;
  title: string;
  icon: `${IconName}:${"outline" | "solid"}`;
};

const WidgetCard = ({ color, percent, title, icon }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className={`w-full shadow-md gap-2 rounded-[14px] bg-white min-h-[266px] cursor-pointer  p-2 flex flex-col justify-center items-center group`}
      style={{ backgroundColor: isHovering ? color : "" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="rounded-full w-10 h-10 flex justify-center items-center bg-purple-300">
        <AppIcons icon={icon} className="fill-white w-6 h-6" />
      </div>
      <h2 className="group-hover:text-white text-black pb-3">{title}</h2>
      <div className="relative">
        <RangeSVG
          primaryColor="group-hover:stroke-white stroke-primary-purple"
          secColor="group-hover:stroke-black/10 stroke-[#F4F5F9]"
          radius={50}
          color={isHovering ? null : color}
          percent={percent}
        />
        <span className="absolute text-xl group-hover:text-white text-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {percent}%
        </span>
      </div>
    </div>
  );
};

export default WidgetCard;
