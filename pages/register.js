import registerAction from "../src/redux/actions/userAction";
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Register = ({ registerAction }) => {
  const [input, setinput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleInput = (e, prop) => {
    setinput({ ...input, [prop]: e.target.value });
  };

  const registerHandle = (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      toast.error("password tidak sama dengan confirm", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
      });
      return;
    }
    registerAction(input);
  };
  const { isLogin } = useSelector((state) => state.user);
  const router = useRouter();
  if (isLogin) {
    // redirect to home

    router.push("/");
  }

  return (
    <div className="min-h-screen bg-Seafoam p-3 flex-col pt-72 justify-center">
      <div className="">
        <div className="flex justify-center gap-8">
          <div className="font-bold text-black text-2xl">Titik.Temu</div>
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
                <InputGroup size="md" width={500} className="pt-2 ">
                  <Input
                    id="password"
                    type="text"
                    placeholder="Enter password"
                    className=" focus:bg-white"
                    onChange={(e) => handleInput(e, "password")}
                    value={input.password}
                  />
                  <InputRightElement
                    width="p-2"
                    className="pr-2 pt-4"
                  ></InputRightElement>
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
                  <InputRightElement
                    width="p-2"
                    className="pr-2 pt-4"
                  ></InputRightElement>
                </InputGroup>
                <button
                  type="submit"
                  className="w-full mt-2 rounded-2xl shadow-xl
             bg-DeepAqua text-white hover:bg-blue-600"
                >
                  Register
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
