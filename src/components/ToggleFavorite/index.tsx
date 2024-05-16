import { FavoriteStoreContext } from "@/context";
import { IoStarOutline } from "@react-icons/all-files/io5/IoStarOutline";
import { FC, useContext } from "react";

type FavoriteComponentType = {
  id: string;
};
export const FavoriteComponent: FC<FavoriteComponentType> = ({ id }) => {
  const { toggleFavoriteMatch, favoritesMatchList } =
    useContext(FavoriteStoreContext);
  return (
    <div
      className="mt-2 cursor-pointer flex justify-center items-center text-lg  hover:text-yellow-300"
      onClick={() => toggleFavoriteMatch(id)}
    >
      <IoStarOutline
        className={`${favoritesMatchList.find((item) => item.C === id) ? "text-yellow-400" : ""}`}
      />
    </div>
  );
};
