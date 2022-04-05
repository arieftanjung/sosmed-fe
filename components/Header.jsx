import Image from "next/image";
import Logoweb from "./../assets/logoweb.png";
import Fotoprofile from "./../assets/fotoprofile.jpeg";
import { IoMdSettings } from "react-icons/io";
import { ImExit } from "react-icons/im";
import Link from "next/link";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-Ocean flex">
      {/* Left */}
      <div className="pl-11 flex items-center">
        <Image
          src={Logoweb}
          alt="Logo Web"
          width={50}
          height={40}
          layout="fixed"
        />
        <p className="font-semibold text-white pl-3">Titik.Temu</p>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow ">
        <SearchIcon className="icon mt-3 mr-1" />
        <input
          className=" md:inline-flex ml-2 items-center bg-transparent outline-none  flex-shrink"
          type="text"
          placeholder="Search Titik.Temu"
        />
      </div>
      {/* Right */}
      <div className="flex items-center py-3 gap-2 pr-3 justify-end ">
        {/* Poto Profile */}
        <Link href="/profile">
          <Image
            onClick="#"
            src={Fotoprofile}
            alt="Arief Tanjung"
            width={40}
            height={40}
            layout="fixed"
            className="rounded-full cursor-pointer"
          />
        </Link>
        <p className="whitespace-nowrap font-semibold text-white pr-3">
          Arief Tanjung
        </p>
        <Link href="/home">
          <HomeIcon className="icon" />
        </Link>
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <Menu>
          <MenuButton className="icon">
            <ChevronDownIcon />
          </MenuButton>
          <MenuList className=" ">
            <MenuItem className="gap-2">
              <Image
                src={Fotoprofile}
                alt="Arief Tanjung"
                width={40}
                height={40}
                layout="fixed"
                className="rounded-full cursor-pointer"
              ></Image>
              <span className="whitespace-nowrap flex-col font-semibold text-black ">
                <p>Arief Tanjung</p>
                <p className="text-gray-400 font-normal">Lihat profile Anda</p>
              </span>
            </MenuItem>
            <MenuItem className="gap-2">
              <IoMdSettings className="icon" />
              <span className="whitespace-nowrap flex-col font-semibold text-black ">
                Pengaturan & Privasi
              </span>
            </MenuItem>
            <Link href="/login">
              <MenuItem className="gap-2">
                <ImExit className="icon" />
                <span className="whitespace-nowrap flex-col font-semibold text-black ">
                  Keluar
                </span>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
