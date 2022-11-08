import React from "react";
import { InfoCardType } from "~/app/store/types/mainApi-types";
import InfoCard from "~/components/home/InfoCard";

type Props = {
  data: InfoCardType[];
};

const InfoSection = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 grid-flow-row gap-4 md:grid-flow-col justify-items-center align-middle ">
      {data.map((card) => (
        <InfoCard card={card} key={card.id} />
      ))}
    </div>
  );
};

export default InfoSection;
