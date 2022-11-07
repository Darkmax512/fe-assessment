import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "~/app/store/app/appSlice";

type Props = {
  data: { value: string; lable: string; selected?: boolean }[];
  name: "state" | "carKind";
};

const SelectInput = ({ data, name }: Props) => {
  const dispatch = useDispatch();
  return (
    <select
      className="w-fit px-4 py-2 rounded-full shadow-lg cursor-pointer"
      name=""
      onChange={(e) => dispatch(setFilter({ [name]: e.target.value }))}
      id=""
    >
      {data.map((option) => (
        <option
          key={option.value}
          selected={option.selected}
          value={option.value}
        >
          {option.lable}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
