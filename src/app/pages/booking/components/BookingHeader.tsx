import React from "react";
import SelectInput from "~/components/ui/SelectInput";

type Props = {};

const selectOne = [
  {
    lable: "New",
    value: "new",
    selected: true,
  },
  {
    lable: "Old",
    value: "old",
  },
];

const selectTwo = [
  {
    lable: "Toyota",
    value: "toyota",
    selected: true,
  },
  {
    lable: "Porshe",
    value: "porshe",
  },
];

const BookingHeader = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 px-7">
      <h1>Booking</h1>
      <div>
        <div className="flex gap-2">
          <SelectInput data={selectOne} />
          <SelectInput data={selectTwo} />
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
