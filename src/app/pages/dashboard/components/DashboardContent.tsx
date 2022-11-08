import React from "react";
import { IconName } from "~/@main/core/AppIcons/AppIcons";
import { useSaleCardsQuery, useWidgetsQuery } from "~/app/store/mainApi";
import WidgetCard from "~/components/widgets/WidgetCard";
import InfoSection from "./InfoSection";
import RecommendSection from "./RecommendSection";
import WidgetsSection from "./WidgetsSection";

type Props = {};

const DashboardContent = (props: Props) => {
  const { data: widgetCardsData } = useWidgetsQuery(null);
  const { data: salesCardsData } = useSaleCardsQuery(null);
  return (
    <div className="w-full flex flex-col gap-4">
      <WidgetsSection data={widgetCardsData || []} />
      <InfoSection />
      <RecommendSection data={salesCardsData || []} />
    </div>
  );
};

export default DashboardContent;
