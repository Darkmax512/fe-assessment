import React from "react";
import SelectInput from "~/components/ui/SelectInput";

type Props = {};

const selectOne = [
  {
    lable: "All",
    value: "",
    selected: true,
  },
  {
    lable: "New",
    value: "new",
  },
  {
    lable: "Old",
    value: "old",
  },
];

const selectTwo = [
  {
    lable: "All",
    value: "",
    selected: true,
  },
  {
    lable: "Toyota",
    value: "toyota",
  },
  {
    lable: "Porshe",
    value: "porshe",
  },
  {
    lable: "Mercedes",
    value: "mercedes",
  },
  {
    lable: "Suzuki",
    value: "suzuki",
  },
];

const BookingHeader = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 px-7">
      <h1>Booking</h1>
      <div>
        <div className="flex gap-2">
          <SelectInput name="state" data={selectOne} />
          <SelectInput name="carKind" data={selectTwo} />
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
