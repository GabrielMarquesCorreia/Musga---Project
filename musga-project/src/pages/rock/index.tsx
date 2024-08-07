import { UnorderedListOutlined, SearchOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaMusic } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

function Rock() {
  const [isFirstModalVisible, setIsFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const showFirstModal = () => setIsFirstModalVisible(true);
  const hideFirstModal = () => setIsFirstModalVisible(false);
  const showSecondModal = () => setIsSecondModalVisible(true);
  const hideSecondModal = () => setIsSecondModalVisible(false);
  return (
    <div className="bg-black bg-opacity-35 w-screen h-screen">
      {/* Header - Inicio */}
      <header className="w-full h-16 bg-bgBlack flex items-center justify-end p-4 gap-24 md:gap-52 lg:gap-32 xl:gap-52 xxl:gap-19">
        <div className="flex items-center md:hidden">
          <button onClick={showSecondModal}>
            <UnorderedListOutlined className="text-5xl font-bold" />
          </button>
          <p className="font-bold text-2xl pl-7">Home</p>
        </div>
        <div className="flex justify-end lg:m-0">
          <img
            src="../public/images/logo.png"
            alt="Logo"
            className="w-40 md:w-44 xl:w-40 flex "
          />
        </div>
        <div className="sm:hidden lg:flex gap-5 items-center xl:gap-8 cursor-pointer">
          <a
            href="#"
            className="text-white font-bold border-b-white border-b-solid border-b-[2px] text-xl"
          >
            Home
          </a>
          <a href="#" className="text-white text-xl">
            Perfil
          </a>
          <div className="flex items-center gap-1" onClick={showFirstModal}>
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
                  className="flex justify-center items-center text-center active:bg-white font-bold border-b-white border-b-solid border-b-[2px] text-2xl w-14"
                >
                  Rock
                </Link>
                <a
                  href="#"
                  className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                >
                  Pop
                </a>
                <a
                  href="#"
                  className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                >
                  Eletronic
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                >
                  Rap
                </a>
                <a
                  href="#"
                  className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                >
                  Classic
                </a>
              </div>
            </div>
          </Modal>
        </div>
        <div className="hidden items-center gap-7 md:flex">
          <a href="#" className=" flex items-center gap-5 lg:hidden">
            <CgProfile className="text-white text-4xl" />
          </a>
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
          <div>
            <div className="bg-white w-full h-14 mt-6 flex p-2">
              <div className="flex items-center gap-5">
                <IoHome className="text-black text-5xl" />
                <p className="text-black font-semibold text-3xl">Home</p>
              </div>
              <div className="w-full flex justify-end items-center">
                <FaMusic className="text-black text-3xl" />
              </div>
            </div>
            <div className="mt-7">
              <a href="#" className=" flex items-center gap-5">
                <CgProfile className="text-white text-5xl" />
                <p className="text-white font-semibold text-3xl">Perfil</p>
              </a>
            </div>
          </div>
        </div>
      </Modal>
      {/* Menu - End */}
      {/* Header - Fim */}
    </div>
  );
}

export default Rock;
