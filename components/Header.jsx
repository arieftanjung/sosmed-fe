import Image from "next/image";
import Logoweb from "./../assets/logoweb.png";
import Fotoprofile from "./../assets/fotoprofile.jpeg";
import { IoMdSettings } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  LinkBox,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
} from "@chakra-ui/react";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { HeaderIcons } from "./HeaderIcon";
import { login } from "../src/redux/actions/userAction";

export const Header = () => {
  Cookies.get;
  const router = useRouter();
  const logoutHandler = () => {
    Cookies.remove("token");
    router.push("/");
  };
  return (
    <div className="sticky top-0 z-50 bg-Ocean flex">
      {/* Left */}
      <div className="pl-11  flex items-center">
        <Link href="/home">
          <Image
            src={Logoweb}
            alt="Logo Web"
            width={50}
            height={40}
            layout="fixed"
          />
        </Link>
        <p className="font-semibold text-white pl-3">NGANDIKA</p>
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
      <div className="flex items-center py-3 gap-2 pr-3 justify-end">
        {/* Poto Profile */}
        <Link href="/profile">
          <Image
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

        <ViewGridIcon className="icon" />
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
            <MenuItem className="gap-2" onClick={logoutHandler}>
              <ImExit className="icon" />
              <span className="whitespace-nowrap flex-col font-semibold text-black ">
                Keluar
              </span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};
