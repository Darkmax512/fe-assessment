import React from "react";
import { useSelector } from "react-redux";
import { getFilters } from "~/app/store/app/appSlice";
import { useCarsQuery } from "~/app/store/mainApi";
import CarCard from "~/components/cars/CarCard";

type Props = {};

const BookingContent = (props: Props) => {
  const { data } = useCarsQuery(null);
  const filterData = useSelector(getFilters);
  console.log(filterData);

  return (
    <div className="flex justify-center flex-wrap gap-4">
      {data
        ?.filter(
          (i) =>
            i.name.match(new RegExp(filterData.carKind, "i")) &&
            i.state.match(new RegExp(filterData.state, "i"))
        )
        .map((car, i) => (
          <CarCard key={`${car.name}${i}`} car={car} />
        ))}
    </div>
  );
};

export default BookingContent;
