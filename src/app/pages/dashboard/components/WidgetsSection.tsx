import { IconName } from "~/@main/core/AppIcons/AppIcons";
import { WidgetsRes } from "~/app/store/types/mainApi-types";
import WidgetCard from "~/components/widgets/WidgetCard";

type Props = { data: WidgetsRes[] };

const WidgetsSection = ({ data }: Props) => {
  return (
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
  );
};

export default WidgetsSection;
