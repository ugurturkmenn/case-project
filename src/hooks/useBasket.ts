import { BasketData, Calculater } from "@/models";
import { useMemo, useState } from "react";

export interface IBasket {
  basket: BasketData[];
  addMatchToBasket: (data: BasketData) => void;
  removeMatchFromBasket: (id: string) => void;
  calculateBasket: Calculater;
  amountOfCoupon: number[];
  setMinPrice: (value: string) => void;
  minPrice: string;
}

export const useBasket = (): IBasket => {
  const [basket, setBasket] = useState<BasketData[]>([]);
  const [minPrice, setMinPrice] = useState<string>("20");

  const removeMatchFromBasket = (id: string) => {
    setBasket((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const addMatchToBasket = (data: BasketData) => {
    const { id, odds } = data;

    const hasMatchOnBasket = basket.find((item) => item.id === id);

    if (!hasMatchOnBasket) {
      setBasket((prev) => [...prev, data]);
    } else {
      if (hasMatchOnBasket.odds === odds) {
        removeMatchFromBasket(id);
      } else {
        const findChangedOddsIdx = basket.findIndex((item) => item.id === id);

        const updateAllData: BasketData[] = [
          ...basket.slice(0, findChangedOddsIdx),
          data,
          ...basket.slice(findChangedOddsIdx + 1),
        ];

        setBasket(updateAllData);
      }
    }
  };

  const calculateBasket: Calculater = useMemo(() => {
    const multipliedOdds = basket.reduce((acc, item) => {
      const odds = Number(item.odds);
      return acc * odds;
    }, 1);

    const maxBetWin = multipliedOdds * Number(minPrice);

    return {
      multipliedOdds,
      maxBetWin,
    };
  }, [basket, minPrice]);

  const amountOfCoupon = useMemo(() => {
    const amounts: number[] = [];

    for (let i = 20; i <= 5000; i++) {
      amounts.push(i);
    }

    return amounts;
  }, []);

  return {
    basket,
    addMatchToBasket,
    removeMatchFromBasket,
    calculateBasket,
    amountOfCoupon,
    setMinPrice,
    minPrice,
  };
};
