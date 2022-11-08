import React from "react";
import { IconName } from "~/@main/core/AppIcons/AppIcons";
import {
  useInfoCardsQuery,
  useSaleCardsQuery,
  useWidgetsQuery,
} from "~/app/store/mainApi";
import WidgetCard from "~/components/widgets/WidgetCard";
import InfoSection from "./InfoSection";
import RecommendSection from "./RecommendSection";
import WidgetsSection from "./WidgetsSection";

type Props = {};

const DashboardContent = (props: Props) => {
  const { data: widgetCardsData } = useWidgetsQuery(null);
  const { data: salesCardsData } = useSaleCardsQuery(null);
  const { data: infoCardsData } = useInfoCardsQuery(null);
  return (
    <div className="w-full flex flex-col gap-4">
      <WidgetsSection data={widgetCardsData || []} />
      <InfoSection data={infoCardsData || []} />
      <RecommendSection data={salesCardsData || []} />
    </div>
  );
};

export default DashboardContent;
