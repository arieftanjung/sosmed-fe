import Image from "next/image";
import Logoweb from "./../assets/logoweb.png";
import { useRouter } from "next/router";
import useLoading from "../src/hooks/useLoading";
import { connect, useSelector } from "react-redux";
import { loginAction } from "../src/redux/actions/userAction";
import { Link } from "react-router-dom";

import {
  FormControl,
  Input,
  InputGroup,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import axios from "axios";

const Login = ({ loginAction }) => {
  const [input, setinput] = useState({
    username: "",
    password: "",
  });

  // const { loading } = useLoading();
  const { isLogin } = useSelector((state) => state.user);
  const handleInput = (e, prop) => {
    setinput({ ...input, [prop]: e.target.value });
  };

  const loginHandle = (e) => {
    e.preventDefault();
    loginAction(input);
  };

  const router = useRouter();
  if (isLogin) {
    // redirect to home

    router.push("/");
  }
  return (
    <div className="bg-Seafoam min-h-screen pt-72 gap-8 justify-center flex w-full">
      <div className="flex-col ">
        <div className="font-semibold text-black text-6xl">Titik.Temu</div>
        <div className="pt-3">
          <Image
            src={Logoweb}
            alt="Logo Web"
            width={300}
            height={250}
            layout="fixed"
          />
        </div>
      </div>
      <div className="bg-Seafoam p-2 h-full rounded-2xl shodow-md text-gray-500 font-medium shadow-lg border-gray-500">
        <div className="flex-col">
          <FormControl className="">
            <Input
              width={500}
              id="username"
              type="text"
              placeholder="Username"
            />
          </FormControl>
          <InputGroup size="md" className="pt-2">
            <Input pr="4.5rem" placeholder="Enter password" />
            <InputRightElement
              width="p-2"
              className="pr-2 pt-4"
            ></InputRightElement>
          </InputGroup>
        </div>
        <div className="pt-4 text-center">
          <button className="bg-black px-32 py-2 hover:bg-blue-600 text-white rounded-md">
            Loggin
          </button>
        </div>
        <div className="pt-5 pb-5 text-center hover:underline cursor-pointer">
          Lupa Kata Sandi?
        </div>
        <div className="border-t-2">
          <div className="pt-4 pb- text-center">
            <button className="bg-black  px-24 py-2 hover:bg-blue-600 text-white rounded-md">
              Buat Akun Baru
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { loginAction })(Login);
