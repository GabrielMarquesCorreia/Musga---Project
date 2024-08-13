import { UnorderedListOutlined, SearchOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiGuitar, GiMusicalKeyboard } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoHeadset, IoHome } from "react-icons/io5";
import { LiaDrumSolid, LiaMicrophoneAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Rap() {
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
          <p className="font-bold text-2xl pl-7">Rap</p>
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
                  className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
                >
                  Rock
                </Link>
                <Link
                  to="../pop"
                  className="flex justify-center items-center text-center active:bg-white font-bold border-b-white border-b-solid border-b-[2px] text-2xl w-14"
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
                  className="text-2xl font-bold flex justify-center items-center text-center active:bg-white"
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
          <div className="mt-6 flex">
            <Link to="../home" className="flex items-center gap-5">
              <IoHome className="text-white text-5xl" />
              <p className="text-white font-semibold text-3xl">Home</p>
            </Link>
          </div>
        </div>
        <div className="mt-7">
          <a href="#" className=" flex items-center gap-5">
            <CgProfile className="text-white text-5xl" />
            <p className="text-white font-semibold text-3xl">Perfil</p>
          </a>
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
        <div className="pt-3 w-full md:flex items-center gap-16 justify-end md:w-full lg:hidden ">
          <h1 className="font-semibold text-2xl md:text-3xl">Gêneros</h1>
          <div className="scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg ">
            <div className="flex w-100 md:w-full">
              <div className="flex gap-3 w-39 md:w-full">
                <div className="flex pt-4 gap-5">
                  {/* Rock - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-2 text-center active:bg-white active:border-black active:text-black">
                    <Link to="../rock">
                      <div className="flex justify-center ">
                        <GiGuitar className="text-white text-5xl" />
                      </div>
                      <p className="font-bold text-2xl">Rock</p>
                    </Link>
                  </div>
                  {/* Rock - End */}

                  {/* Pop - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-1 text-center active:bg-white active:border-black active:text-black">
                    <Link to="../pop" className="active:text-black">
                      <div className="flex justify-center">
                        <IoHeadset className="text-white text-5xl mb-1" />
                      </div>
                      <p className="font-bold text-2xl">Pop</p>
                    </Link>
                  </div>
                  {/* Pop - End */}

                  {/* Eletronic - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] active:bg-white active:border-black active:text-black h-24 w-24 text-center text-white">
                    <Link to="../eletronic">
                      <div className="flex justify-center">
                        <GiMusicalKeyboard className="text-white text-6xl mb-1 active:text-white" />
                      </div>
                      <p className="font-bold text-base">Eletronica</p>
                    </Link>
                  </div>
                  {/* Eletronic - End */}

                  {/* Rap - Start */}
                  <div className="bg-white border-black border-solid border-[6px] h-24 w-24 p-1 text-center text-black">
                    <Link to="../rap">
                      <div className="flex justify-center">
                        <LiaMicrophoneAltSolid className="text-5xl mb-1 text-black" />
                      </div>
                      <p className="font-bold text-2xl">Rap</p>
                    </Link>
                  </div>
                  {/* Rap - End */}

                  {/* BR - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 text-center active:bg-white active:border-black active:text-black">
                    <a href="#">
                      <div className="flex justify-center">
                        <LiaDrumSolid className="text-white text-6xl active:text-black" />
                      </div>
                      <p className="font-bold text-lg">Brasileira</p>
                    </a>
                  </div>
                  {/* BR - End */}
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
                      href="https://www.youtube.com/watch?v=8CdcCD5V-d8"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/venom.jpg"
                        alt="Venom"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Venom - <br />
                        Eminem
                      </p>
                    </a>
                  </div>
                </div>
                {/* First Music - End */}

                {/* Second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=xFYQQPAOz7Y"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/lose-yourself.png"
                        alt="Lose Yourself"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Lose Yourself - <br />
                        Eminem
                      </p>
                    </a>
                  </div>
                </div>
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=eJO5HU_7_1w"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/the-real-slim-shady.png"
                        alt="The Real Slim Shady"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        The Real Slim Shady
                        <br />- Eminem
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Obim8BYGnOE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/till-i-collapse.png"
                        alt="Till I Collapse"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Till I Collapse
                        <br />- Eminem
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=6EEW-9NDM5k"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/lonely.jpg"
                        alt="Lonely"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl bg-white"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Lonely <br /> - Akon
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=YVkUvmDQ3HY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/without-me.png"
                        alt="Without me"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Without me -<br />
                        Eminem
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixth Music - End */}

                {/* Seventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=D4hAVemuQXY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/sing-for-the-moment.png"
                        alt="Sing For The Moment"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Sing For The Moment -<br />
                        Eminem
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventh Music - End */}

                {/* Eigth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=fPO76Jlnz6c"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/gangsta-paradise.png"
                        alt="Gangsta's Paradise"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Gangsta's Paradise - <br />
                        Coolio Feat.L.V.
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eigth Music - End */}

                {/* Nineth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=MIXqIFY51P4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/tic-tac.png"
                        alt="Cnv Sound Vol.14"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Cnv Sound Vol.14 - <br />
                        PURE NEGGA
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineth Music - End */}

                {/* Tenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=2zNSgSzhBfM"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/hold-us.png"
                        alt="Can't Hold Us"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Can't Hold Us -<br />
                        Macklemore & Ryan
                        <br /> Lewis Ft.Ray Dalton
                      </p>
                    </a>
                  </div>
                </div>
                {/* Tenth Music - End */}

                {/* Eleventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=GjVoB8zQQ6o"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/congratulations.jpg"
                        alt="Congratulations"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Congratulations - <br />
                        Post Malone Ft.Quavo
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eleventh Music - End */}

                {/* Twenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=utd2i-Zc1l4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/i-dont-wanna-die.png"
                        alt="I don't wanna die"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        I don't wanna die -<br />
                        Hollywood Undead
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenth Music - End */}

                {/* Thirteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=DHhHUZsXTBk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/paralyzed.png"
                        alt="I'm Paralyzed"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        I'm Paralyzed -<br />
                        NF
                      </p>
                    </a>
                  </div>
                </div>
                {/* Thirteenth Music - End */}

                {/* Fourteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=4e4qsTr22XQ"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/rip.png"
                        alt="R.I.P"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        R.I.P -
                        <br /> 3OH!3
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourteenth Music - End */}

                {/* Fifteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=JWA5hJl4Dv0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/bombapatch.jpg"
                        alt="Bomba Patch"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Don't matter - <br />
                        Akon
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifteenth Music - End */}

                {/* Sixteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=LvCcK8gLZJw"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/júpiter.png"
                        alt="Júpiter"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Júpiter -<br /> VMZ
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixteenth Music - End */}

                {/* Seventeenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Kd30za8wHc8"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/depoimento.png"
                        alt="Depoimento de um viciado"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Depoimento de um
                        <br /> viciado - Racionais Mc's
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventeenth Music - End */}

                {/* Eightteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ByefwiKh4Oo"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/halloween.png"
                        alt="Missing Halloween"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Missing Halloween -
                        <br /> VMZ
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eightteenth Music - End */}

                {/* Nineteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=dGFxdmuDA4A"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/depoimento.png"
                        alt="Diário de um detento"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Diário de um detento -<br />
                        Racionais Mc's
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineteenth Music - End */}

                {/* Twentieth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://m.youtube.com/watch?v=ytHxB1JOhoI&pp=ygUMI3JpY2tfbXVzaWNh"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/sanchez.png"
                        alt="Sanchez"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Sanchez -<br />
                        VMZ
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twentieth Music - End */}

                {/* Twenty-first Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=RHnEVjd6eRg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/one-shot.png"
                        alt="Última Chance (One Shot)"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Última Chance
                        <br />
                        (One Shot) - VMZ
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenty-first - End */}
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
                      href="https://www.youtube.com/watch?v=uelHwf8o7_U"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/love-the-way.png"
                        alt="Love the way you lie"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Love the way you lie
                        <br />- Eminem Ft.Rihanna
                      </p>
                    </a>
                  </div>
                </div>
                {/* First Music - End */}

                {/* Second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=bKDdT_nyP54"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/smack-that.png"
                        alt="Smack That"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Smack That - <br />
                        Akon Ft.Eminem
                      </p>
                    </a>
                  </div>
                </div>
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=gOMhN-hfMtY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/stan.png"
                        alt="Stan"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Stan -<br />
                        Eminem
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}
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

export default Rap;
