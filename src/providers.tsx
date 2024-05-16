import {
  BasketContext,
  FavoriteStoreContext,
  MatchCalendarContext,
} from "@/context";
import { useBasket } from "@/hooks/useBasket";
import { useCalendar } from "@/hooks/useCalendar";
import { ReactNode } from "react";
import { useFavorite } from "./hooks/useFavorite";

export const BasketContextStoreProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <BasketContext.Provider value={useBasket()}>
      {children}
    </BasketContext.Provider>
  );
};

export const MatchCalendarStoreProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <MatchCalendarContext.Provider value={useCalendar()}>
      {children}
    </MatchCalendarContext.Provider>
  );
};

export const FavoriteStoreProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <FavoriteStoreContext.Provider value={useFavorite()}>
      {children}
    </FavoriteStoreContext.Provider>
  );
};
