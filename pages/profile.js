import Image from "next/image";
import Bg from "./../assets/trata.jpg";
import Fotoprofile from "./../assets/fotoprofile.jpeg";
import Selda from "./../assets/profilselda.jpeg";
import Aqil from "./../assets/aqilprofil.jpg";
import Nova from "./../assets/nova.jpeg";
import Barbara from "./../assets/storisaqil.jpg";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { BsCameraFill } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { Header } from "./../components/Header";
import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";
import { API_URL } from "../src/helpers";
import { connect } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { editProfile, editProfilePhoto } from "../src/redux/actions/userAction";
import useUser from "../src/hooks/useUser";

const Profile = ({ editProfile, editProfilePhoto }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bio, username, fullname, profilepicture } = useUser();
  // input data user
  const [input, setinput] = useState({
    fullname: "",
    username: "",
    bio: "",
  });

  const handleInput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const [selectedImage, setselectedImage] = useState({
    file: [],
    filePreview: null,
  });

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setselectedImage({
        ...selectedImage,
        file: e.target.files[0],
        filePreview: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const onSaveHandle = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profilepicture", selectedImage.file);
      editProfilePhoto(formData);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const inputHandle = async (e) => {
    e.preventDefault();
    try {
      let token = Cookies.get("token");
      editProfile(input);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-Seafoam flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <div className="mx-[300px] relative h-96">
        <Image
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          src={Bg}
          className="rounded-xl"
        />
      </div>
      <div className="relative mx-[300px] ">
        <div className="flex gap-4 absolute -top-11 w-full  ">
          <div className="w-1/4 pl-2">
            <img //http:localhost:5000/images/PP71723781237.jpg
              src={`${API_URL}${profilepicture}`}
              alt="Arief Tanjung"
              width={150}
              height={150}
              className="rounded-full  cursor-pointer"
            />
          </div>
          <div className="pt-12 items-start w-2/4 ">
            <p className="whitespace-nowrap font-semibold text-xl">
              {fullname}
            </p>
            <p className="whitespace-nowrap font-semibold text-xl">
              @{username}
            </p>
            <p className="text-gray-400 font-normal">4 teman</p>
            <Wrap className="pt-2">
              <WrapItem>
                <Image
                  src={Selda}
                  alt="Shelda"
                  width={40}
                  height={40}
                  layout="fixed"
                  className="rounded-full cursor-pointer"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  src={Aqil}
                  alt="Aqil"
                  width={40}
                  height={40}
                  layout="fixed"
                  className="rounded-full cursor-pointer"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  src={Nova}
                  alt="Nova"
                  width={40}
                  height={40}
                  layout="fixed"
                  className="rounded-full cursor-pointer"
                />
              </WrapItem>
              <WrapItem>
                <Image
                  src={Barbara}
                  alt="Barbara"
                  width={40}
                  height={40}
                  layout="fixed"
                  className="rounded-full cursor-pointer"
                />
              </WrapItem>
            </Wrap>
          </div>
          <div className="flex justify-between flex-col w-2/4">
            <div className="text-right pr-2">
              <button className="w-44 h-10 rounded-md cursor-pointer hover:bg-gray-300 bg-white">
                <div className="flex gap-2 text-center">
                  <BsCameraFill className="pl-2 text-3xl " />
                  <p className="pt-1 font-semibold text-black ">
                    Edit Foto Sampul
                  </p>
                </div>
              </button>
            </div>
            <div className="flex justify-end gap-3">
              <button className="w-44 h-10 rounded-md bg-blue-500 cursor-pointer hover:bg-blue-600">
                <div className="flex gap-2 text-center">
                  <BsPlusCircle className="pl-3 text-white text-3xl " />
                  <p className="pt-1 text-white font-semibold  ">
                    Tambahkan Cerita
                  </p>
                </div>
              </button>
              <button
                onClick={onOpen}
                className="w-32 h-10 rounded-md bg-gray-200 cursor-pointer hover:bg-gray-300"
              >
                <div className="flex gap-2 text-center">
                  <HiPencil className="pl-3 text-black text-3xl " />
                  <p className="pt-1 text-black font-semibold  ">Edit Profil</p>
                </div>
                <Modal className="p-10" isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader className="text-center">
                      Edit Profil
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <div>
                        <div className="flex-col">
                          <div className="flex justify-between">
                            <div className="font-bold text-xl text-ellipsis">
                              Foto Profil
                            </div>
                          </div>
                          <div className="pt-3 text-center">
                            <Image
                              src={Fotoprofile}
                              alt="Arief Tanjung"
                              width={150}
                              height={150}
                              layout="fixed"
                              className="rounded-full cursor-pointer"
                            />
                          </div>
                          <div>
                            <input
                              type="file"
                              className="pr-16"
                              onChange={onFileChange}
                              id="profilepicture"
                              name="profilepicture" // image masih error
                              accept=".jpg,.jpeg,.png"
                            />
                            <button
                              className="text-blue-600 text-xl hover:underline"
                              onClick={onSaveHandle}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                        <div className="flex-col">
                          <div className="flex justify-between">
                            <div className="font-bold text-xl">Foto Sampul</div>
                            <button className="text-blue-600 text-xl hover:underline">
                              Edit
                            </button>
                          </div>
                          <div className="pt-3 text-center">
                            <Image
                              objectPosition="center"
                              objectFit="cover"
                              src={Bg}
                              className="rounded-xl"
                            />
                          </div>
                        </div>
                        <form onSubmit={inputHandle}>
                          <div className="flex-col">
                            <div className="flex justify-between">
                              <div className="font-bold text-xl">Bio</div>
                            </div>
                            <div className="pt-3 text-center">
                              <textarea
                                onChange={handleInput}
                                name="bio"
                                className="border-4 w-96 mx-2 h-20 rounded-md bg-inherit  focus:outline-none resize-none"
                                placeholder="Bio"
                                type="text"
                              ></textarea>
                            </div>
                          </div>
                          <div className="flex-col">
                            <div className="flex justify-between">
                              <div className="font-bold text-xl">Fullname</div>
                            </div>
                            <div className="pt-3 text-center">
                              <textarea
                                onChange={handleInput}
                                name="fullname"
                                className="border-4 w-96 mx-2 h-20 rounded-md bg-inherit  focus:outline-none resize-none"
                                placeholder="fullname"
                                type="text"
                              ></textarea>
                            </div>
                          </div>
                          <div className="flex-col">
                            <div className="flex justify-between">
                              <div className="font-bold text-xl">Username</div>
                            </div>
                            <div className="pt-3 text-center">
                              <textarea
                                onChange={handleInput}
                                name="username"
                                className="border-4 w-96 mx-2 h-20 rounded-md bg-inherit  focus:outline-none resize-none"
                                placeholder="username"
                                type="text"
                              ></textarea>
                            </div>
                            <button className="text-blue-600 text-xl pl-80 hover:underline">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                  </ModalContent>
                </Modal>
              </button>
            </div>
          </div>
        </div>
        <div className="text-black pt-40 py-1 pl-2 flex-col">
          <p>Bio :</p>
          <h1>{bio}</h1>
        </div>
      </div>
      <div className=" pt-3 mt-3 gap-2 flex mx-[300px]">
        <div className="pt-3 w-1/2">
          <div className="item-center flex flex-col pr-4 pl-4">
            <div className="flex justify-between">
              <span className="text-black text-xl font-extrabold ">Teman</span>
              <span className="text-blue-600 text-xl font-normal ">
                Lihat Semua Teman
              </span>
            </div>
            <div>4 Teman</div>
          </div>
          <div className="flex gap-3 pt-2">
            <p className="pl-3 flex flex-col">
              <Image
                src={Selda}
                alt="Shelda"
                width={90}
                height={120}
                layout="fixed"
                className="rounded-lg cursor-pointer"
              />
              <span>Shelda</span>
            </p>
            <p className="pl-3 flex flex-col">
              <Image
                src={Aqil}
                alt="Aqil"
                width={90}
                height={120}
                layout="fixed"
                className="rounded-lg cursor-pointer"
              />
              <span>Aqil</span>
            </p>
            <p className="pl-3 flex flex-col">
              <Image
                src={Nova}
                alt="Nova"
                width={90}
                height={120}
                layout="fixed"
                className="rounded-lg cursor-pointer"
              />
              <span>Nova</span>
            </p>
            <p className="pl-3 flex flex-col">
              <Image
                src={Barbara}
                alt="Barbara"
                width={90}
                height={120}
                layout="fixed"
                className="rounded-lg cursor-pointer"
              />
              <span>Barbara</span>
            </p>
          </div>
        </div>
        <div className="bg-Seafoam p-2 h-44 rounded-2xl shodow-md text-gray-500 font-medium shadow-lg border-gray-500">
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
                className="border-4 w-[53vh] mx-1 h-28 rounded-md bg-inherit focus:outline-none resize-none"
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
      </div>
    </div>
  );
};

export default connect(null, { editProfile, editProfilePhoto })(Profile);
