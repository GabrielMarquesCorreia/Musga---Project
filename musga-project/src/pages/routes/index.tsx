import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Login from "../login";
import Home from "../home";
import Rock from "../rock";
import Pop from "../pop";
import Eletronic from "../eletronic";
import Rap from "../rap";
import Brasilian from "../brasilian";
import Profile from "../profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { UserProvider } from "../../UserContext/index.tsx";
import { UnorderedListOutlined, SearchOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoClose, IoHome } from "react-icons/io5";

function Footer() {
  return (
    <div className="w-screen h-36 md:h-36 bg-gray8  md:flex md:items-center md:justify-end xxl:justify-start">
      <footer className="pt-2 md:p-4 md:pt-0 pl-5 pr-5 md:flex md:items-center md:gap-[4rem] lg:gap-[7.08rem] xl:gap-5 xxl:gap-8">
        <img
          src="../public/images/logo.png"
          alt="Logo"
          className="w-32 md:w-52 lg:w-56 xl:w-52 flex"
        />
        <div className="pt-2 md:pt-4 md:flex-col md:flex  md:gap-3 xl:flex-row xxl:gap-12">
          <a
            href="https://github.com/GabrielMarquesCorreia/Musga---Project"
            className="flex items-center"
          >
            <FaGithub className="text-2xl md:text-5xl mr-3 lg:mr-6" />
            <p className="text-xs md:text-sm lg:text-xl pt-1">
              https://github.com/GabrielMarquesCorreia/Musga---Project
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-marques-correia-077949232/"
            className="flex items-center"
          >
            <FaLinkedin className="text-2xl md:text-5xl mr-3 lg:mr-6" />
            <p className="text-xs md:text-sm lg:text-xl pt-1">
              https://www.linkedin.com/in/gabriel-marques-correia-077949232/
            </p>
          </a>
        </div>
      </footer>
    </div>
  );
}

function MainRouter() {
  const location = useLocation();
  const showFooter = location.pathname !== "/";

  const [isFirstModalVisible, setIsFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const showFirstModal = () => setIsFirstModalVisible(true);
  const hideFirstModal = () => setIsFirstModalVisible(false);
  const showSecondModal = () => setIsSecondModalVisible(true);
  const hideSecondModal = () => setIsSecondModalVisible(false);

  const userId = localStorage.getItem("selectedUserId");

  return (
    <UserProvider>
      <div className="bg-phone-1 md:bg-tablet-1 lg:bg-desktop-1 xl:bg-desktop-2 xxl:bg-desktop-3 bg-no-repeat w-full h-screen bg-fixed bg-cover overflow-x-hidden">
        <header className="w-full h-16 bg-bgBlack flex items-center justify-end p-4 gap-10 md:gap-12 lg:gap-32 xl:gap-52 xxl:gap-19">
          <div className="flex items-center md:hidden">
            <button onClick={showSecondModal}>
              <UnorderedListOutlined className="text-5xl font-bold" />
            </button>
            <p className="font-bold text-2xl pl-7">Brasileira</p>
          </div>
          <div className="flex justify-end lg:m-0">
            <img
              src="../public/images/logo.png"
              alt="Logo"
              className="w-40 md:w-52 xl:w-40 flex "
            />
          </div>
          <div className="sm:hidden md:flex gap-5 items-center xl:gap-8 cursor-pointer">
            <Link to="../home" className="text-white text-xl">
              Home
            </Link>
            <Link to={`../profile/${userId}`} className="text-white text-xl">
              Perfil
            </Link>
            <div
              className="lg:flex items-center gap-1 md:hidden"
              onClick={showFirstModal}
            >
              <p className="text-white text-xl">Gêneros</p>
              <IoIosArrowDown className="text-white text-2xl" />
            </div>
            <Modal
              visible={isFirstModalVisible}
              onCancel={hideFirstModal}
              footer={null}
              closable={false}
              className="custom-modal flex ml-[22rem] xl:ml-[29rem] xxl:ml-[36rem]"
              bodyStyle={{ padding: 0, margin: 0 }}
            >
              <div className="flex gap-8 justify-center xl:gap-16">
                <div className="flex flex-col gap-2">
                  <Link
                    to="../rock"
                    className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                  >
                    Rock
                  </Link>
                  <Link
                    to="../pop"
                    className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                  >
                    Pop
                  </Link>
                  <Link
                    to="../eletronic"
                    className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                  >
                    Eletronic
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    to="../rap"
                    className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                  >
                    Rap
                  </Link>
                  <a
                    href="#"
                    className="flex justify-center items-center text-center active:bg-white font-bold border-b-white border-b-solid border-b-[2px] text-2xl w-26"
                  >
                    Brasileira
                  </a>
                </div>
              </div>
            </Modal>
          </div>
          <div className="hidden items-center gap-7 md:flex">
            <div className="flex items-center gap-3">
              <SearchOutlined className="text-4xl" />
              <Input
                className="bg-transparent placeholder:text-white placeholder:text-lg border-white border-solid border-[1px] rounded-xl w-72 xl:w-82 xxl:w-30"
                placeholder="Pesquisar"
              />
            </div>
          </div>
        </header>
        <Modal
          visible={isSecondModalVisible}
          onCancel={hideSecondModal}
          footer={null}
          closable={false}
          className="custom-modal lg:hidden"
          bodyStyle={{ padding: 0, margin: 0 }}
        >
          <div>
            <div className="flex justify-end border-b-white border-b-solid border-b-[2px]">
              <IoClose
                className="text-white text-5xl mb-1"
                onClick={hideSecondModal}
              />
            </div>
            <div className="mt-6 flex">
              <Link to="../home" className="flex items-center gap-5">
                <IoHome className="text-white text-5xl" />
                <p className="text-white font-semibold text-3xl">Home</p>
              </Link>
            </div>
          </div>
          <div className="mt-7">
            <Link
              to={`../profile/${userId}`}
              className=" flex items-center gap-5"
            >
              <CgProfile className="text-white text-5xl" />
              <p className="text-white font-semibold text-3xl">Perfil</p>
            </Link>
          </div>
        </Modal>
        <div className="bg-black bg-opacity-65 lg:bg-opacity-65 bg-no-repeat bg-fixed bg-cover w-full mb-0 md:mb-0">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rock" element={<Rock />} />
            <Route path="/pop" element={<Pop />} />
            <Route path="/eletronic" element={<Eletronic />} />
            <Route path="/rap" element={<Rap />} />
            <Route path="/brasilian" element={<Brasilian />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Routes>
        </div>
        {showFooter && <Footer />}
      </div>
    </UserProvider>
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}
