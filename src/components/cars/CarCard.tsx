import React, { useEffect, useState } from "react";
import AppIcons from "~/@main/core/AppIcons";
import { CarType } from "~/app/store/types/mainApi-types";
import clsx from "clsx";

type Props = {
  car: CarType;
};

const CarCard = ({ car }: Props) => {
  const [oldData, setOldData] = useState<number[]>(
    JSON.parse(localStorage.getItem("Cars") || "[]")
  );

  const addCarToFav = (car: number) => {
    setOldData((prev) => {
      let data = JSON.parse(localStorage.getItem("Cars") || "[]");
      const carIndex = oldData.indexOf(car);
      if (carIndex === -1) data = [...data, car];
      else data.splice(carIndex, 1);
      localStorage.setItem("Cars", JSON.stringify(data));
      return [...data];
    });
  };
  return (
    <div className="bg-white select-none cursor-pointer shadow-md text-gray-dark-3 rounded-[16px] p-6 flex flex-col gap-3 justify-between min-w-[325px] max-w-[350px] h-72 items-start">
      <div className="w-full">
        <div className="flex flex-1 w-full justify-between">
          <h3 className="text-primary-dark-1">{car.name}</h3>
          <div onClick={() => addCarToFav(car.id)}>
            <AppIcons
              icon="HeartIcon:outline"
              className={clsx(
                oldData.includes(car.id) ? "fill-red-600" : "",
                "cursor-pointer active:scale-125 text-gray-dark-6 h-5 w-5"
              )}
            />
          </div>
        </div>
        <span>{car.type}</span>
      </div>
      <div className="w-full h-[120px]">
        <img
          className="w-full h-full object-contain"
          src={car.img}
          alt={car.name}
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <div className="flex gap-1">
            <AppIcons
              icon="UserIcon:outline"
              className="text-primary-purple w-5 h-5"
            />
            <span>{car.capacity}</span>
          </div>
          <div className="flex gap-1">
            <AppIcons
              icon="ArrowPathRoundedSquareIcon:outline"
              className="text-primary-purple w-5 h-5"
            />
            <span>{car.system}</span>
          </div>
        </div>
        <h3 className="text-primary-dark-1">
          ${car.price}
          <span className="text-gray-dark-3">/d</span>
        </h3>
      </div>
    </div>
  );
};

export default CarCard;
