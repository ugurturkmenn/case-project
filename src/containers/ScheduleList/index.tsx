import { FC } from "react";
import { Virtuoso } from "react-virtuoso";
import { BetData } from "@/models";
import BetRow from "@/components/BetRow";

type Props = {
  lists: BetData[];
};

export const ScheduleList: FC<Props> = ({ lists }) => {
  return (
    <div className="w-full h-screen border-b-[1px] border-[#070707] ">
      <Virtuoso
        style={{ height: "100vh" }}
        totalCount={lists.length}
        itemContent={(index) => <BetRow item={lists[index]} />}
      />
    </div>
  );
};

export default ScheduleList;
