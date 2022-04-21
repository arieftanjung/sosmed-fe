import Image from "next/image";
import Fotoprofile from "./../assets/fotoprofile.jpeg";
import { SidebarRow } from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoopingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DekstopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

export const Sidebar = () => {
  return (
    <div className="flex-col items-center py-3 pr-2  ">
      <div className="flex items-center gap-3 pl-3 pt-10">
        <Image
          src={Fotoprofile}
          alt="Arief Tanjung"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full cursor-pointer"
        />
        <p className="whitespace-nowrap font-semibold pr-3">Arief Tanjung</p>
      </div>
      <div className=" pt-3 pr-2 ">
        <SidebarRow Icon={UsersIcon} title="Friends" />
        <SidebarRow Icon={UserGroupIcon} title="Groups" />
      </div>
    </div>
  );
};
