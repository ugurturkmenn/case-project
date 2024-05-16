import { FC } from "react";
import BetTable from "@/containers/ScheduleList/BetTable";
import { BetData } from "@/models";
import { FavoriteComponent } from "../ToggleFavorite";

type BetRowType = {
  item: BetData;
};

const BetRow: FC<BetRowType> = ({ item }) => {
  return (
    <div
      key={item.C}
      className="grid grid-cols-3 w-full h-auto lg:h-28 lg:flex lg:text-sm text-xs bg-[#0E2520] rounded-md shadow-lg text-left justify-center items-center mb-4 flex-wrap lg:flex-nowrap "
    >
      <div className="h-full w-full lg:w-[15%] flex  flex-col ">
        <div className=" text-[#d2d2d2] py-2 text-center border-b-[1px]  border-[#111] ">
          {item.D}
        </div>
        <FavoriteComponent id={item.C} />
      </div>
      <div className="h-full w-full lg:w-[15%]  ">
        <div className=" text-[#d2d2d2] py-2 text-center border-b-[1px]  border-[#111]  ">
          {item.DAY}
        </div>
        <div className="mt-2 text-center">{item.T}</div>
      </div>
      <div className="h-full w-full lg:w-[30%] flex flex-col text-left   ">
        <div className=" text-[#d2d2d2] py-2 text-center border-b-[1px]  border-[#111] whitespace-nowrap overflow-hidden ">
          {item.LN}
        </div>
        <div className="mt-2 text-center">{item.N}</div>
      </div>
      <div className="h-full w-full lg:flex hidden lg:w-[5%]   flex-col text-center">
        <div className=" text-[#d2d2d2]  py-2 text-center border-b-[1px]  border-[#111] ">
          MBS
        </div>
        <div className=" bg-green-900 p-1 text-white text-xs rounded-md mt-3">
          {item.OCG["1"].MBS}
        </div>
      </div>
      <BetTable datas={item} />
    </div>
  );
};

export default BetRow;
