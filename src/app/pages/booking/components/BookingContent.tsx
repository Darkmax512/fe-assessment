import React from "react";
import { useCarsQuery } from "~/app/store/mainApi";
import CarCard from "~/components/cars/CarCard";

type Props = {};

const BookingContent = (props: Props) => {
  const { data } = useCarsQuery(null);
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {data?.map((car, i) => (
        <CarCard key={`${car.name}${i}`} car={car} />
      ))}
    </div>
  );
};

export default BookingContent;
