import { useBasket } from "@/hooks/useBasket";
import { useCalendar } from "@/hooks/useCalendar";
import { createContext } from "react";
import { useFavorite } from "./hooks/useFavorite";

export const BasketContext = createContext({} as ReturnType<typeof useBasket>);

export const MatchCalendarContext = createContext(
  {} as ReturnType<typeof useCalendar>
);

export const FavoriteStoreContext = createContext(
  {} as ReturnType<typeof useFavorite>
);
