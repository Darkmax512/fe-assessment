import React from "react";
import { SaleCard } from "~/app/store/types/mainApi-types";
import SalesCard from "~/components/home/SalesCard";

type Props = {
  data: SaleCard[];
};

const RecommendSection = ({ data }: Props) => {
  return (
    <div className="flex gap-6 md:flex-nowrap flex-wrap justify-center items-center">
      {data.map((card) => (
        <SalesCard card={card} />
      ))}
    </div>
  );
};

export default RecommendSection;
