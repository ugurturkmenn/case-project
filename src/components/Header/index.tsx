import { FC } from "react";
import { Logo } from "../Logo";
import { IoIosNotificationsOutline } from "@react-icons/all-files/io/IoIosNotificationsOutline";
import { IoIosSettings } from "@react-icons/all-files/io/IoIosSettings";

export const Header: FC = () => {
  return (
    <header className="w-full h-28 p-4 lg:pl-16 lg:pr-12 items-center flex justify-between bg-[#1F493F] text-white">
      <div className="flex-1">
        <Logo />
      </div>
      <div className=" w-1/2 lg:w-1/4 flex justify-end items-center gap-3">
        <div className="w-8 h-8 flex justify-center items-center text-2xl">
          <IoIosNotificationsOutline data-testid="notification-icon" />
        </div>
        <div className="w-8 h-8 flex justify-center items-center text-2xl">
          <IoIosSettings data-testid="settings-icon" />
        </div>
        <div className="w-30 h-15 rounded-full overflow-hidden">
          Ugur Turkmen
        </div>
      </div>
    </header>
  );
};
