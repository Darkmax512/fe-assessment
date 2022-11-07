import React from "react";
import SelectInput from "~/components/ui/SelectInput";

type Props = {};

const BookingHeader = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 px-7">
      <h1>Booking</h1>
      <div>
        <div className="flex gap-2">
          <SelectInput />
          <SelectInput />
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
