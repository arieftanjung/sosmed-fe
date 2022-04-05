import Image from "next/image";
import Fotoprofile from "./../assets/fotoprofile.jpeg";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
export const Input = () => {
  return (
    <div className="bg-white p-2 rounded-2xl shodow-md text-gray-500 font-medium shadow-lg border-gray-500">
      <div className="flex mt-3">
        <Image
          src={Fotoprofile}
          alt="Arief Tanjung"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full cursor-pointer"
        />
        <form>
          <textarea
            name="ngepost"
            className="border-4 w-[80vh] mx-2 h-28 rounded-md bg-inherit  focus:outline-none resize-none"
            placeholder="postingan"
            type="text"
          ></textarea>
          <div className=" flex justify-end">
            <button className="flex gap-6 ">
              <MdOutlineAddAPhoto className="h-6 w-6 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 ..." />
              <BsChatDots className="h-6 w-6 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 ..." />
              <BsTrash className="h-6 w-6 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 ..." />
              <RiSendPlaneFill className="h-6 w-6 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 ..." />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
