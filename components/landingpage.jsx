import Image from "next/image";
import Logoweb from "./../assets/logoweb.png";
import Link from "next/link";

export const Landingpage = () => {
  return (
    <div className="flex-col">
      <div className=" bg-Ocean flex p-5 justify-around ">
        <div className="pl-11 ">
          <p className="font-semibold text-white pt-2 pl-3 text-2xl">
            NGANDIKA
          </p>
        </div>
        <div className="">
          <Link href="/login">
            <button className="p-2 px-6 rounded-md btn-5 text-2xl font-semibold">
              Log In
            </button>
          </Link>
          <Link href="/register">
            <button className="p-2 px-6 btn-5 rounded-md text-2xl font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-Seafoam h-screen flex justify-center items-center gap-6">
        <Image
          src={Logoweb}
          alt="Logo Web"
          width={500}
          height={400}
          layout="fixed"
        />
        <p className="font-semibold text-black pl-3 text-7xl">NGANDIKA</p>
      </div>
    </div>
  );
};
