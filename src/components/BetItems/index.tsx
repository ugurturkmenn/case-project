import { BasketData, BetType, Outcome } from "@/models";
import { FC, useCallback } from "react";

type Props = {
  betData: BetType[];
  addMatchToBasket: (basket: BasketData) => void;
  basket: BasketData[];
};

export const BetItems: FC<Props> = ({ betData, addMatchToBasket, basket }) => {
  const dataAdapter = useCallback(
    (
      betName: string,
      odds: Outcome,
      teams: string,
      league: string,
      id: string,
      mbs: string
    ) => {
      const data = {
        betName,
        odds: odds.O,
        side: odds.N,
        teams,
        league,
        id,
        mbs,
      };

      addMatchToBasket(data);
    },
    [addMatchToBasket]
  );

  const checkBasketHasBet = useCallback(
    (id, odds) => {
      if (!basket.length) return false;

      const checkSelectedItem = basket.some(
        (item) => item.id === id && item.odds === odds
      );

      return checkSelectedItem;
    },
    [basket]
  );

  return (
    <>
      {betData.map(({ betName, betOdds, teams, league, id, mbs }, key) => {
        return (
          <div
            key={key}
            className="h-full w-full lg:w-[20%]  text-xs lg:text-xs  flex flex-col text-center mt-12 lg:mt-0"
          >
            <div className="border-b-[1px] border-[#111] text-[#d2d2d2] p-0 lg:py-2 text-center lg:pb-[.75rem]">
              {betName}
            </div>
            <div className="p-0 lg:p-1 text-xs flex gap-1 justify-center cursor-pointer mt-2 text-center">
              {betOdds.map((odds, index) => {
                return (
                  <div
                    onClick={() =>
                      dataAdapter(betName, odds, teams, league, id, mbs)
                    }
                    key={index}
                    className={`${checkBasketHasBet(id, odds.O) ? "bg-[#81CD34] text-black " : "bg-[#1C3934]"}  shadow-md  text-xs  p-2 w-10  rounded-md  hover:text-[#c4c4c4] transition-all`}
                  >
                    <div>{odds.N}</div>
                    <div>{odds.O}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
