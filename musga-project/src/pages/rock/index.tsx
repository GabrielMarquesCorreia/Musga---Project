import { UnorderedListOutlined, SearchOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiGuitar, GiMusicalKeyboard } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoHeadset, IoHome } from "react-icons/io5";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Rock() {
  const [isFirstModalVisible, setIsFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const showFirstModal = () => setIsFirstModalVisible(true);
  const hideFirstModal = () => setIsFirstModalVisible(false);
  const showSecondModal = () => setIsSecondModalVisible(true);
  const hideSecondModal = () => setIsSecondModalVisible(false);

  return (
    <div>
      {/* Header - Inicio */}
      <header className="w-full h-16 bg-bgBlack flex items-center justify-end p-4 gap-24 md:gap-12 lg:gap-32 xl:gap-52 xxl:gap-19">
        <div className="flex items-center md:hidden">
          <button onClick={showSecondModal}>
            <UnorderedListOutlined className="text-5xl font-bold" />
          </button>
          <p className="font-bold text-2xl pl-7">Rock</p>
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
          <a href="#" className="text-white text-xl">
            Perfil
          </a>
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
                  className="flex justify-center items-center text-center active:bg-white font-bold border-b-white border-b-solid border-b-[2px] text-2xl w-14"
                >
                  Rock
                </Link>
                <Link
                  to="../pop"
                  className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                >
                  Pop
                </Link>
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
          <div>
            <div className="mt-6 flex">
              <Link to="../home" className="flex items-center gap-5">
                <IoHome className="text-white text-5xl" />
                <p className="text-white font-semibold text-3xl">Home</p>
              </Link>
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

      {/* Content - Start */}
      <div className="m-4">
        {/* Search - Start */}
        <div className=" flex items-center gap-3 md:hidden">
          <SearchOutlined className="text-4xl" />
          <p className="text-2xl">Search</p>
          <Input
            className="bg-transparent placeholder:text-white placeholder:text-lg border-white border-solid border-[1px] rounded-xl"
            placeholder="Pesquisar"
          />
        </div>
        {/* Search - End */}

        {/* Genders - Start */}
        <div className="pt-4 w-full md:flex items-center gap-36 justify-end md:w-full lg:hidden ">
          <h1 className="font-semibold text-2xl md:text-3xl">Gêneros</h1>
          <div className="scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg ">
            <div className="flex w-100 md:w-full">
              <div className="flex gap-3 w-39 md:w-full">
              <div className="flex pt-4 gap-5 md:gap-8">
                  {/* Rock - Start */}
                  <div className="border-solid border-[4.1px] h-24 w-24 p-2 text-center bg-white border-black text-black">
                    <Link to="../rock">
                      <div className="flex justify-center ">
                        <GiGuitar className="text-black text-5xl" />
                      </div>
                      <p className="font-bold text-2xl">Rock</p>
                    </Link>
                  </div>
                  {/* Rock - End */}

                  {/* Pop - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-1 text-center active:bg-white active:border-black active:text-black">
                    <Link to="../pop" className="active:text-black">
                      <div className="flex justify-center">
                        <IoHeadset className="text-white text-5xl mb-1 active:text-black" />
                      </div>
                      <p className="font-bold text-2xl">Pop</p>
                    </Link>
                  </div>
                  {/* Pop - End */}

                  {/* Eletronic - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-1 text-center active:bg-white active:border-black active:text-black">
                    <a href="#">
                      <div className="flex justify-center">
                        <GiMusicalKeyboard className="text-white text-6xl active:text-black" />
                      </div>
                      <p className="font-bold text-base">Eletronica</p>
                    </a>
                  </div>
                  {/* Eletronic - End */}

                  {/* Rap - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-1 text-center active:bg-white active:border-black active:text-black">
                    <a href="#">
                      <div className="flex justify-center">
                        <LiaMicrophoneAltSolid className="text-white text-5xl mb-1 active:text-black" />
                      </div>
                      <p className="font-bold text-2xl">Rap</p>
                    </a>
                  </div>
                  {/* Rap - End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Genders - End */}
        {/* My favorites - Start */}
        <h1 className="font-semibold text-2xl pt-4 md:text-3xl lg:pt-0">
          Minhas favoritas
        </h1>
        <div className="scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg xl:max-w-screen-xxl">
          <div className="flex md:w-full">
            <div className="flex gap-3 md:w-full">
              <div className="pt-4 flex  gap-4">
                {/* First Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=2X_2IdybTV0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/melhor-musga.jpg"
                        alt="Carry on my wayward son"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Carry on my
                        <br /> wayward son -<br /> Kansas
                      </p>
                    </a>
                  </div>
                </div>
                {/* First Music - End */}

                {/* Second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=vOXZkm9p_zY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/birds.jpg"
                        alt="Birds"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Birds -<br /> Imagine Dragons
                      </p>
                    </a>
                  </div>
                </div>
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=NNiTxUEnmKI"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/final-countdown.jpg"
                        alt="The final countdown"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        The final countdown -<br /> Europe
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=njJ7NZMH70M"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/skillet-best.jpg"
                        alt="Not gonna die"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Not gonna die -<br /> Skillet
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Tm8LGxTLtQk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/onemorelight.jpg"
                        alt="One more light"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        One more light -<br /> Linkin Park
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=9BMwcO6_hyA"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/always.png"
                        alt="Always"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold text-lg">
                        Always - <br />
                        Bon Jovi
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixth Music - End */}

                {/* Seventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ocpDEOXABWg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/courtesy-call.jpg"
                        alt="Courtesy Call"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Courtesy Call -<br />
                        Thousand Foot Krutch
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventh Music - End */}

                {/* Eigth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=eVTXPUF4Oz4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/intheend.jpg"
                        alt="In the end"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        In the end -<br />
                        Linkin Park
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eigth Music - End */}

                {/* Nineth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ilKD9YwM2f4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/imaginedragons.png"
                        alt="Ready aim fire"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Ready aim fire -<br />
                        Imagine Dragons
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineth Music - End */}

                {/* Tenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=hTWKbfoikeg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/nirvana.jpg"
                        alt="Smells like spirit"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Smells like spirit - <br />
                        Nirvana
                      </p>
                    </a>
                  </div>
                </div>
                {/* Tenth Music - End */}

                {/* Eleventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=lDK9QqIzhwk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/livingonaprayer.jpg"
                        alt="Living on a prayer"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Living on a prayer - <br />
                        Bon jovi
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eleventh Music - End */}

                {/* Twenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=t99KH0TR-J4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/theshowmustgoon.jpg"
                        alt="The show must go on"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        The show must
                        <br /> go on - Queen
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenth Music - End */}

                {/* Thirteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=1mjlM_RnsVE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/monster.jpg"
                        alt="Monster"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Monster -<br /> Skillet
                      </p>
                    </a>
                  </div>
                </div>
                {/* Thirteenth Music - End */}

                {/* Fourteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=2ZBtPf7FOoM"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/killerqueen.jpg"
                        alt="Killer Queen"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Killer Queen -<br /> Queen
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourteenth Music - End */}

                {/* Fifteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=2ZBtPf7FOoM"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/bohemianrapsody.jpg"
                        alt="Bohemian Rapsody"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Bohemian Rapsody -<br /> Queen
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifteenth Music - End */}

                {/* Sixteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=2aJUnltwsqs"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/awakeandalive.jpg"
                        alt="Awake and Alive"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Awake and Alive -<br /> Skillet
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixteenth Music - End */}

                {/* Seventeenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=HuS5NuXRb5Y"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/Eleanor Rigby.jpg"
                        alt="Eleanor Rigby"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Eleanor Rigby -<br /> The Beatles
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventeenth Music - End */}

                {/* Seventeenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=TmSRMWw8Y_0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/hero-chad.jpg"
                        alt="Hero"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Hero -<br /> Chad Kroeger
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventeenth Music - End */}

                {/* Eightteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=vx2u5uUu3DE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/always.png"
                        alt="It's my life"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        It's my life -<br /> Bon Jovi
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eightteenth Music - End */}

                {/* Nineteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=UQ92eyxnxmQ"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/itsnotover.jpg"
                        alt="It's not over"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        It's Not Over -<br /> Daughtry's
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineteenth Music - End */}

                {/* Twentieth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=kXYiU_JCYtU"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/numb.jpg"
                        alt="Numb"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Numb -<br /> Linkin Park
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twentieth Music - End */}
              </div>
            </div>
          </div>
        </div>
        {/* My favorites - End*/}

        {/* For you - Start */}
        <h1 className="font-semibold text-2xl pt-5 md:text-3xl">
          Recomendadas
        </h1>
        <div className="scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg xl:max-w-screen-xxl">
          <div className="flex md:w-full">
            <div className="flex gap-3 md:w-full">
              <div className="pt-4 flex  gap-4">
                {/* First Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Aiay8I5IPB8"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/howyouremindme.jpg"
                        alt="How you remind me"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        How you remind me - <br />
                        Nickelback
                      </p>
                    </a>
                  </div>
                </div>
                {/* First Music - End */}

                {/* Second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=btPJPFnesV4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/eyeofthetiger.jpg"
                        alt="Eye of the tiger"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Eye of the tiger - <br />
                        Survivor
                      </p>
                    </a>
                  </div>
                </div>
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=sUJkCXE4sAA"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/loveofmylife.jpg"
                        alt="Love of my life"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Love of my life -<br /> Queen
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=PWbg7ShjOPk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/8.jpg"
                        alt="Not gonna die"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Eight Beat Berserker -
                        <br />
                        Kisida Kyodan&The
                        <br />
                        Akebosi Rockets
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=E0ozmU9cJDg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/master.jpg"
                        alt="Master of puppets"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Master of puppets -<br /> Metalica
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=h_L4Rixya64"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/thebestofyou.jpg"
                        alt="The best of you"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        The best of you - <br />
                        Foo Fighters
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixth Music - End */}

                {/* Seventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=l9PxOanFjxQ"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/immortals.jpg"
                        alt="Fall out boys"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Immortals -<br />
                        Fall out boys
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventh Music - End */}

                {/* Eigth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=L_jWHffIx5E"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/all star.jpg"
                        alt="All star"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        All star -<br />
                        Smash mouth
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eigth Music - End */}

                {/* Nineth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ysSxxIqKNN0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/newdivine.jpg"
                        alt="New divine"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        New divine -<br />
                        Likin Park
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineth Music - End */}

                {/* Tenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ktvTqknDobU"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/radioactive.jpg"
                        alt="Radioactive"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Radioactive - <br />
                        Imagine Dragons
                      </p>
                    </a>
                  </div>
                </div>
                {/* Tenth Music - End */}

                {/* Eleventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=LSvOTw8UH6s"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/mydemons.jpg"
                        alt="My demons"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        My demons - <br />
                        Starset
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eleventh Music - End */}

                {/* Twenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=nU307tV32B0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/weare.jpg"
                        alt="The show must go on"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        We Are -<br />
                        ONE OK ROCK
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenth Music - End */}

                {/* Thirteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=HdnTSXUWd3E"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/courtesy-call.jpg"
                        alt="Warr of Change"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Warr of Change -<br /> Thousand Foot Krutch
                      </p>
                    </a>
                  </div>
                </div>
                {/* Thirteenth Music - End */}

                {/* Fourteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=_Jtpf8N5IDE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/whowantstoliveforever.jpg"
                        alt="Who wants to live forever"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Who wants to live
                        <br /> forever - Queen
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourteenth Music - End */}

                {/* Fifteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=0HgJwrwEEKQ"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/sosorry.jpg"
                        alt="I'm so sorry"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        I'm so sorry -<br /> Imagine dragons
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifteenth Music - End */}

                {/* Sixteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=uGcsIdGOuZY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/hero-skillet.jpg"
                        alt="Hero"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Hero -<br /> Skillet
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixteenth Music - End */}
              </div>
            </div>
          </div>
        </div>
        {/* For you - End */}
      </div>
      {/* Content - End */}
    </div>
  );
}

export default Rock;
