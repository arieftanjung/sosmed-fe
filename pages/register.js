import registerAction from "../src/redux/actions/userAction";
import { FormControl, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { connect, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import React from "react";
import useLoading from "../src/hooks/useLoading";

const Register = ({ registerAction }) => {
  const [input, setinput] = useState({
    fullname: "",
    username: "",
    password: "",
    email: "",
  });

  const handleInput = (e, prop) => {
    setinput({ ...input, [prop]: e.target.value });
  };
  let denganUnique = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  let denganAngka = new RegExp("([0-9])");
  // let denganDelapanCharacter = new RegExp("(?=.{8,})");
  // let denganHurufBesar = new RegExp("([a-zA-Z])");

  const registerHandle = (e) => {
    e.preventDefault();
    let diterima = true;
    if (!denganAngka.test(input.username)) {
      toast.error("username harus memiliki angka", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
      diterima = false;
    }
    if (!denganUnique.test(input.password)) {
      toast.error(
        "password harus mengandung angka, huruf besar, dan min 8 character",
        {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          draggable: true,
        }
      );
      diterima = false;
    }
    if (input.password !== input.confirmPassword) {
      toast.error("password tidak sama dengan confirm", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
      diterima = false;
    }
    if (diterima) {
      registerAction(input);
    }
  };
  const { loading } = useLoading();
  const { isRegister, isLogin } = useSelector((state) => state.user);

  const router = useRouter();
  if (isRegister && !isLogin) {
    // redirect to home
    router.push("/greeting");
  }
  // if (isLogin && isRegister) {
  //   router.push("/register");
  // }

  return (
    <div className="min-h-screen bg-Seafoam p-3 flex-col pt-72 justify-center">
      <div className="">
        <div className="flex justify-center gap-8">
          <div className="font-bold text-black text-2xl">Register</div>
        </div>
        <div className="bg-Seafoam p-2 h-full rounded-2xl  font-medium grid justify-center ">
          <div className="bg-Seafoam p-3 rounded-2xl shadow-xl">
            <div className="flex-col ">
              <form onSubmit={registerHandle}>
                <FormControl className="">
                  <Input
                    width={500}
                    id="fullname"
                    type="text"
                    placeholder="Fullname"
                    className="focus:bg-white"
                    onChange={(e) => handleInput(e, "fullname")}
                    value={input.fullname}
                  />
                </FormControl>
                <FormControl className="pt-2">
                  <Input
                    width={500}
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="focus:bg-white"
                    onChange={(e) => handleInput(e, "username")}
                    value={input.username}
                  />
                </FormControl>
                <FormControl className="pt-2">
                  <Input
                    width={500}
                    id="email"
                    type="text"
                    placeholder="Email"
                    className="focus:bg-white"
                    onChange={(e) => handleInput(e, "email")}
                    value={input.email}
                  />
                </FormControl>
                <FormControl>
                  <InputGroup size="md" width={500} className="pt-2 ">
                    <Input
                      id="password"
                      type="text"
                      placeholder="Enter password"
                      className=" focus:bg-white"
                      onChange={(e) => handleInput(e, "password")}
                      value={input.password}
                    />
                  </InputGroup>
                  <InputGroup size="md" width={500} className="pt-2 ">
                    <Input
                      id="password"
                      type="text"
                      placeholder="Confirm Password"
                      className=" focus:bg-white"
                      onChange={(e) => handleInput(e, "confirmPassword")}
                      value={input.confirmPassword}
                    />
                  </InputGroup>
                </FormControl>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full mt-2 rounded-2xl shadow-xl
               bg-DeepAqua text-white disabled:bg-yellow-300 hover:bg-blue-600"
                >
                  {loading ? "loading" : "register"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { registerAction })(Register);
