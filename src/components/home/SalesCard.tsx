import React from "react";
import AppIcons from "~/@main/core/AppIcons";
import { SaleCard } from "~/app/store/types/mainApi-types";

type Props = {
  card: SaleCard;
};

const SalesCard = ({ card }: Props) => {
  return (
    <div
      style={{ backgroundColor: card.color }}
      className="w-full md:min-w-[318px] rounded-2xl h-[236px] bg-[#F4E3E5] py-4 px-7 flex flex-col items-start justify-between"
    >
      <div className="flex gap-2 text-[24px]">
        <AppIcons icon="ArrowPathIcon:solid" className="h-8 w-8" />
        <h3>{card.recommend}% Recommend</h3>
      </div>
      <div className="w-full h-[106px]">
        <img className="w-full h-full" src={card.img} alt={card.name} />
      </div>
      <h2 className="text-[20px]">{card.name}</h2>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center justify-center">
          <AppIcons
            icon="ArrowPathRoundedSquareIcon:solid"
            className="w-6 h-6"
          />
          <p>{card.total}K</p>
          <AppIcons icon="Cog8ToothIcon:solid" className="w-6 h-6" />
          <AppIcons icon="BoltIcon:outline" className="w-6 h-6" />
        </div>
        <p>${card.total}/h</p>
      </div>
    </div>
  );
};

export default SalesCard;
