import { FC } from "react";
import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  setSearchText: (value: string) => void;
};

export const Search: FC<Props> = ({ setSearchText }) => {
  const handleSearch = useDebouncedCallback((query) => {
    setSearchText(query);
  }, 300);
  return (
    <div className="w-full h-16 flex justify-center items-center gap-3">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="ara"
        className="w-full bg-[#1F493F] text-sm h-12 rounded-md px-4 outline-none"
      />
      <IoSearchOutline className="text-2xl cursor-pointer" />
    </div>
  );
};

export default Search;
