import clsx from "clsx";
import React from "react";
import { InfoCardType } from "~/app/store/types/mainApi-types";

type Props = { card: InfoCardType };

const InfoCard = ({ card }: Props) => {
  console.log(card);

  return (
    <div
      style={{ backgroundColor: card.color }}
      className={clsx(
        card.span ? "md:col-span-2 !w-full" : "",
        "relative  xl:w-[340px] w-full md:w-[250px] h-[222px] rounded-[4px] p-4"
      )}
    >
      <img
        className="absolute top-[19px] right-[9px]"
        src={card.img}
        alt={card.data}
      />
      {card.span ? (
        <div className="py-6 h-full w-3/4 flex flex-col justify-between ">
          <div className="">
            <h2>{card.data}</h2>
            <p>{card.disc}</p>
          </div>
          <button className="bg-[#0F2837] w-1/2 rounded-md px-6 py-3 text-slate-50">
            {card.action}
          </button>
        </div>
      ) : (
        <div className="text-white">
          <h2 className="text-[24px] break-all">
            {card.data.split(" ").map((i: any) => {
              if (isFinite(i))
                return <span className="text-[#FF9619] text-[40px] ">{i}</span>;
              return <p>{i}</p>;
            })}
          </h2>
          <p className="text-[#FF9619] text-[12px] break-after-avoid">
            {card.disc}
          </p>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
