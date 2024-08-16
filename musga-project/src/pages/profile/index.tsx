import { UnorderedListOutlined, SearchOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaMusic } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoHome } from "react-icons/io5";
import { MdImage, MdKeyboardArrowDown } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const [isFirstModalVisible, setIsFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const showFirstModal = () => setIsFirstModalVisible(true);
  const hideFirstModal = () => setIsFirstModalVisible(false);
  const showSecondModal = () => setIsSecondModalVisible(true);
  const hideSecondModal = () => setIsSecondModalVisible(false);

  const { userId } = useParams();

  // Variables -
  let profileName, profileImg;
  // - Variables

  // First User -
  if (userId === "1") {
    (profileName = "Usuário 1"),
      (profileImg = "./../../../public/images/jake.jpg");
  }
  // - First User

  // Second User -
  if (userId === "2") {
    (profileName = "Usuário 2"),
      (profileImg = "./../../../public/images/luffy.jpg");
  }
  // - Second User

  // Third User -
  if (userId === "3") {
    (profileName = "Gabriel"),
      (profileImg = "./../../../public/images/astronauta.jpg");
  }
  // - Third User

  return (
    <div>
      {/* Header - Inicio */}
      <header className="w-full h-16 bg-bgBlack flex items-center justify-end p-4 gap-24 md:gap-12 lg:gap-32 xl:gap-52 xxl:gap-19">
        <div className="flex items-center md:hidden">
          <button onClick={showSecondModal}>
            <UnorderedListOutlined className="text-5xl font-bold" />
          </button>
          <p className="font-bold text-2xl pl-7">Perfil</p>
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
          <Link
            to="../profile"
            className="text-white font-bold border-b-white border-b-solid border-b-[2px] text-xl"
          >
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
                <Link
                  to="../brasilian"
                  className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                >
                  Brasileira
                </Link>
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

      {/* Menu - Start */}
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
          <div className="mt-7">
            <Link to="../home" className=" flex items-center gap-5">
              <IoHome className="text-white text-5xl" />
              <p className="text-white font-semibold text-3xl">Home</p>
            </Link>
          </div>
        </div>
        <div className="bg-white w-full h-14 mt-6 flex p-2">
          <div className="flex items-center gap-5">
            <CgProfile className="text-black text-5xl" />
            <p className="text-black font-semibold text-3xl">Perfil</p>
          </div>
          <div className="w-full flex justify-end items-center">
            <FaMusic className="text-black text-3xl" />
          </div>
        </div>
      </Modal>
      {/* Menu - End */}
      {/* Header - Fim */}

      {/* Content - Inicio */}
      <div className="pr-12 pl-12 p-4">
        {/* Profile Start */}
        <div className="bg-none flex flex-col items-center justify-center">
          <img src={profileImg} alt="profile" className="w-36" />
          <div className="border-b-2 flex w-full justify-between">
            <input
              className="w-64 text-white text-2xl mt-2 font-semibold bg-transparent mb-2 placeholder:text-white"
              placeholder={profileName}
            />
            <button>
              <GoPencil className="text-2xl mt-2" />
            </button>
          </div>
        </div>
        {/* Profile End */}

        {/* Change Profile - Start */}
        <Link
          to="/"
          className="border-4 w-full h-14 mt-8 p-1 pr-3 pl-3 flex items-center text-center gap-5 justify-center"
        >
          <RiUserLine className="text-white text-4xl" />
          <p className="font-semibold text-2xl">Mudar de Conta</p>
        </Link>
        {/* Change Profile - End */}

        {/* Change Backgroun - Start */}
        <button className="border-b-2 flex w-full justify-between mt-8">
          <p className="font-semibold text-2xl mb-2">Editar Backgorund</p>
          <MdImage className="text-4xl mb-1" />
        </button>
        {/* Change Backgroun - End */}

        {/* Favorite Gender - Start */}
        <div className="mt-8 bg-transparent border-b-2 w-full">
          <button className="flex justify-between w-full">
              <p className="text-2xl font-semibold mb-2">Selecione um gênero</p>
              <MdKeyboardArrowDown className="text-4xl" />
          </button>
        </div>
        {/* Favorite Gender - End */}
      </div>
      {/* Content - End */}
    </div>
  );
}

export default Profile;
