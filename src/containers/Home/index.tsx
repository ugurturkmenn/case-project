import { FC, useContext } from "react";
import "@/index.css";
import { MatchCalendarContext } from "@/context";
import ScheduleList from "@/containers/ScheduleList";
import { ApiStatus } from "@/models";
import { Skeleton } from "@/components/Skeleton";
import { ErrorBoundary } from "@/containers/ErrorBoundary";
import FavoriteMatchLists from "@/components/Favorites";

const Home = () => {
  const { fetchCalendarApiStatus, filterCalendarBySearchText } =
    useContext(MatchCalendarContext);

  const RenderMatchSchedule: FC = () => {
    return (
      <>
        <FavoriteMatchLists />
        <ScheduleList lists={filterCalendarBySearchText} />
      </>
    );
  };

  switch (fetchCalendarApiStatus) {
    case ApiStatus.LOADING:
      return Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="w-full h-screen flex p-0 lg:p-4 flex-col">
          <Skeleton />
        </div>
      ));

    case ApiStatus.SUCCESS:
      return <RenderMatchSchedule />;

    case ApiStatus.ERROR:
      return <ErrorBoundary />;

    default:
      return null;
  }
};

export default Home;
