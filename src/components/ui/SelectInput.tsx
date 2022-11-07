import React from "react";

type Props = {};

const SelectInput = (props: Props) => {
  return (
    <select
      className="w-fit px-4 py-2 rounded-full cursor-pointer"
      name=""
      id=""
    >
      <option className="bg-red" value="new">
        New
      </option>
      <option className="bg-red" value="new">
        New
      </option>
    </select>
  );
};

export default SelectInput;
