import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppIcons from "~/@main/core/AppIcons";
import { useCarsQuery } from "~/app/store/mainApi";

type Props = {};

const SearchInput = (props: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const { data } = useCarsQuery(null);
  return (
    <div className="w-20 md:w-96 flex md:ml-0">
      {open && (
        <div
          className="absolute inset-0 w-full bg-black/10 h-screen"
          onClick={() => setOpen(false)}
        />
      )}
      <div className="relative w-60 md:w-96 flex md:ml-0">
        <div className="relative w-full flex items-center text-gray-400 focus-within:text-gray-600">
          <div className="pointer-events-none absolute ml-3 inset-y-0 left-0 flex items-center">
            <AppIcons icon="MagnifyingGlassIcon:solid" className="h-5 w-5" />
          </div>
          <input
            id="search-field"
            className="block h-10 w-96 border-transparent py-2 pl-12 pr-5 rounded-lg bg-[#F5F4F6] text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
            placeholder="Search"
            type="search"
            name="search"
            onChange={(e) => {
              setSearchValue(e.target.value);
              if (e.target.value) setOpen(true);
              else setOpen(false);
            }}
          />
        </div>
        {open && (
          <div className="absolute z-10 rounded-lg overflow-hidden top-full w-full bg-white">
            <ul className="h-40 overflow-scroll">
              {data
                ?.filter((item) =>
                  item.name.match(new RegExp(searchValue, "i"))
                )
                .map((i) => (
                  <li
                    className="h-12 w-full cursor-pointer border-b-2"
                    key={i.id}
                  >
                    <Link
                      className="w-full text-black hover:bg-black/10 justify-between h-full flex items-center py-2 px-3"
                      to={`/booking?name=${i.name}`}
                      onClick={() => setOpen(false)}
                    >
                      <div className="w-12">
                        <img className="w-full" src={i.img} alt={i.name} />
                      </div>
                      <p>{i.name}</p>
                      <p>${i.price}/d</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
