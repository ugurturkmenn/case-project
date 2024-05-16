import { BetItems } from "@/components/BetItems";
import { BasketContext } from "@/context";
import { BetData, BetType, OutcomeGroup } from "@/models";
import { FC, useContext } from "react";

type Props = {
  datas: BetData;
};

export const BetTable: FC<Props> = ({ datas }) => {
  const { addMatchToBasket, basket } = useContext(BasketContext);
  const betItemsMap: BetType[] = Object.values(datas.OCG).map(
    (item: OutcomeGroup) => {
      return {
        betName: item.N,
        betOdds: Object.values(item.OC),
        teams: datas.N,
        league: datas.LN,
        id: datas.C,
        mbs: item.MBS,
      };
    }
  );

  return (
    <BetItems
      betData={betItemsMap}
      addMatchToBasket={addMatchToBasket}
      basket={basket}
    />
  );
};

export default BetTable;
