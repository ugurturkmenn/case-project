import { FC } from "react";

export const Skeleton: FC = () => {
  return (
    <div role="status" className="w-[95%] animate-pulse">
      <div className="w-full h-8 flex justify-center items-center mb-4">
        <div className="h-full  w-[30%] flex  flex-col bg-gray-200 ml-4 dark:bg-gray-700 rounded-md"></div>
        <div className="h-full w-[25%] bg-gray-200 ml-4 dark:bg-gray-700 rounded-md"></div>
        <div className="h-full w-[30%] flex flex-col text-left bg-gray-200 ml-4 dark:bg-gray-700 rounded-md"></div>
        <div className="h-full w-[15%] flex flex-col text-center bg-gray-200 ml-4 dark:bg-gray-700 rounded-md"></div>
      </div>
    </div>
  );
};
