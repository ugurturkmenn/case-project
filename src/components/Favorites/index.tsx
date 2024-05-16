import { FC, useContext } from "react";
import { Virtuoso } from "react-virtuoso";
import { FavoriteStoreContext } from "@/context";
import BetRow from "../BetRow";

export const FavoriteMatchLists: FC = () => {
  const { favoritesMatchList: lists } = useContext(FavoriteStoreContext);

  return (
    <div className="w-full  border-b-[1px] border-[#070707] mb-10 shadow-lg">
      <h1>Favoriler</h1>
      <Virtuoso
        style={{ height: "150px", overflow: "auto" }}
        totalCount={lists.length}
        itemContent={(index) => <BetRow item={lists[index]} />}
      />
    </div>
  );
};

export default FavoriteMatchLists;
