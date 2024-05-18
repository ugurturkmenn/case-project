import { ApiStatus, BetData } from "@/models";
import { useEffect, useMemo, useState } from "react";

interface ICalendar {
  fetchCalendarApiStatus: ApiStatus;
  matchCalendar: BetData[];
  setSearchText: (value: string) => void;
  filterCalendarBySearchText: BetData[];
  leagueList: string[];
  setLeagueTypes: (value: string) => void;
  leagueType: string;
}

export const useCalendar = (): ICalendar => {
  const [matchCalendar, setMatchCalendar] = useState<BetData[]>([]);
  const [leagueType, setLeagueTypes] = useState<string>("");

  const [searchText, setSearchText] = useState<string>("");
  const [fetchCalendarApiStatus, setFethcCalendarApiStatus] =
    useState<ApiStatus>(ApiStatus.IDLE);

  const getCalendar = async () => {
    try {
      setFethcCalendarApiStatus(ApiStatus.LOADING);

      const apiUrl = process.env.REACT_APP_CASE_API_URL;
      // const apiUrl = "https://nesine-case-study.onrender.com/bets";

      if (apiUrl) {
        const response: BetData[] = await fetch(apiUrl).then((res) =>
          res.json()
        );

        setFethcCalendarApiStatus(ApiStatus.SUCCESS);
        setMatchCalendar(response);
      } else {
        setFethcCalendarApiStatus(ApiStatus.ERROR);
      }
    } catch {
      setFethcCalendarApiStatus(ApiStatus.ERROR);
    }
  };

  const leagueList = useMemo(() => {
    const allList = matchCalendar.map((item) => item.LN);

    return Array.from(new Set(allList));
  }, [matchCalendar]);

  const filterCalendarBySearchText = useMemo(() => {
    return matchCalendar.filter((item) => {
      const nameMatches =
        item.N.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      const leagueMatches =
        item.LN.toLowerCase().indexOf(leagueType.toLowerCase()) > -1;

      return nameMatches && leagueMatches;
    });
  }, [matchCalendar, searchText, leagueType]);

  useEffect(() => {
    getCalendar();
  }, []);

  return {
    fetchCalendarApiStatus,
    matchCalendar,
    filterCalendarBySearchText,
    setSearchText,
    leagueList,
    setLeagueTypes,
    leagueType,
  };
};
