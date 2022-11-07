import React from "react";

type Props = {
  data: { value: string; lable: string; selected?: boolean }[];
};

const SelectInput = ({ data }: Props) => {
  return (
    <select
      className="w-fit px-4 py-2 rounded-full shadow-lg cursor-pointer"
      name=""
      id=""
    >
      {data.map((option) => (
        <option
          key={option.value}
          selected={option.selected}
          className="bg-red"
          value={option.value}
        >
          {option.lable}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
