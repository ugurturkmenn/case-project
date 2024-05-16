import { FC } from "react";
import { IoFootball } from "@react-icons/all-files/io5/IoFootball";
import { Skeleton } from "@/components/Skeleton";

type Props = {
  leagueList: string[];
  setLeagueTypes: (value: string) => void;
  leagueType: string;
};

const FilterBar: FC<Props> = ({ leagueList, setLeagueTypes, leagueType }) => {
  const handleSearchByLeagueType = (league: string) => {
    const activeFilter = league === leagueType ? "" : league;
    setLeagueTypes(activeFilter);
  };

  return (
    <div className="bg-[#1F493F] p-3 my-3 w-full">
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
        {leagueList.length ? (
          leagueList.map((league, i) => {
            return (
              <li
                className={`${league === leagueType && "bg-[#81CD34] hover:text-[#333]"} flex items-center space-x-2 text-white mr-2 bg-[#17302a] p-3 select-none border-[#3d3d3d] hover:text-[#eee] hover:bg-[#81CD34] duration-500 cursor-pointer mt-2`}
                key={i}
                onClick={() => handleSearchByLeagueType(league)}
              >
                <IoFootball />
                <span>{league}</span>
              </li>
            );
          })
        ) : (
          <Skeleton />
        )}
      </ul>
    </div>
  );
};

export default FilterBar;
