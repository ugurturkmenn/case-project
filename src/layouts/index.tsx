import MyCoupon from "@/components/MyCoupon";
import FilterBar from "@/components/FilterBar";
import { Header } from "@/components/Header";
import Search from "@/components/Search";
import { MatchCalendarContext } from "@/context";
import { FC, ReactNode, useContext } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { setSearchText, leagueList, setLeagueTypes, leagueType } =
    useContext(MatchCalendarContext);
  return (
    <main className="bg-[#17302A] h-full text-white w-full overflow-hidden flex relative flex-wrap flex-col">
      <Header />

      <FilterBar
        leagueList={leagueList}
        setLeagueTypes={setLeagueTypes}
        leagueType={leagueType}
      />

      <div className="flex sm:flex-column">
        <div className="w-full flex flex-col justify-center items-center p-3 my-3">
          <div className="w-full">
            <Search setSearchText={setSearchText} />
          </div>
          {children}
        </div>

        <MyCoupon />
      </div>
    </main>
  );
};
