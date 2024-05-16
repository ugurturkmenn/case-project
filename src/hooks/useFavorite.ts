import { useContext, useMemo, useState } from "react";
import { MatchCalendarContext } from "@/context";

export const useFavorite = () => {
  const [favoritedMatchIDs, setFavoritedMatchIDs] = useState<string[]>([]);
  const { matchCalendar } = useContext(MatchCalendarContext);

  const toggleFavoriteMatch = (id) => {
    const index = favoritedMatchIDs.findIndex((item) => item === id);
    if (index > -1) {
      setFavoritedMatchIDs((favorites) => {
        return [
          ...favorites.slice(0, index),
          ...favorites.slice(index + 1, favorites.length),
        ];
      });
    } else {
      setFavoritedMatchIDs((favorites) => {
        return [
          ...favorites.slice(0, index),
          id,
          ...favorites.slice(index, favorites.length),
        ];
      });
    }
  };

  const favoritesMatchList = useMemo(() => {
    return matchCalendar.filter((match) => {
      return favoritedMatchIDs.includes(match.C);
    });
  }, [favoritedMatchIDs]);

  return {
    toggleFavoriteMatch,
    favoritesMatchList,
  };
};
