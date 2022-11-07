import React from "react";
import { IconName } from "~/@main/core/AppIcons/AppIcons";
import { useWidgetsQuery } from "~/app/store/mainApi";
import WidgetCard from "~/components/widgets/WidgetCard";

type Props = {};

const DashboardContent = (props: Props) => {
  const { data } = useWidgetsQuery(null);
  return (
    <div className="w-full">
      <div className="flex md:flex-nowrap flex-wrap gap-6 w-full justify-center">
        {data?.map((i: any) => (
          <WidgetCard
            key={i.title}
            color={i.color}
            percent={i.percent}
            title={i.title}
            icon={i.icon as `${IconName}:${"outline" | "solid"}`}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default DashboardContent;
