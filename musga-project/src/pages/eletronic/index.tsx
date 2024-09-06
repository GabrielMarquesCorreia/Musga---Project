import { UnorderedListOutlined, SearchOutlined } from "@ant-design/icons";
import { Modal, Input } from "antd";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiGuitar, GiMusicalKeyboard } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoHeadset, IoHome } from "react-icons/io5";
import { LiaDrumSolid, LiaMicrophoneAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Eletronic() {
  const [isFirstModalVisible, setIsFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const showFirstModal = () => setIsFirstModalVisible(true);
  const hideFirstModal = () => setIsFirstModalVisible(false);
  const showSecondModal = () => setIsSecondModalVisible(true);
  const hideSecondModal = () => setIsSecondModalVisible(false);

  const userId = localStorage.getItem("selectedUserId");

  return (
    <div>
      {/* Header - Inicio */}
      <header className="w-full h-16 bg-bgBlack flex items-center justify-end p-4 gap-10 md:gap-12 lg:gap-32 xl:gap-52 xxl:gap-19">
        <div className="flex items-center md:hidden">
          <button onClick={showSecondModal}>
            <UnorderedListOutlined className="text-5xl font-bold" />
          </button>
          <p className="font-bold text-2xl pl-7">Eletronica</p>
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
                  className="flex justify-center items-center text-center font-bold text-2xl"
                >
                  Pop
                </Link>
                <Link
                  to="../eletronic"
                  className="text-2xl font-bold flex justify-center items-center text-center border-b-white border-b-solid border-b-[2px]"
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
                  <div className="border-solid border-[6px] h-24 w-24 text-center bg-white border-black text-black">
                    <Link to="../eletronic">
                      <div className="flex justify-center">
                        <GiMusicalKeyboard className="text-black text-6xl active:text-white" />
                      </div>
                      <p className="font-bold text-base">Eletronica</p>
                    </Link>
                  </div>
                  {/* Eletronic - End */}

                  {/* Rap - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-1 text-center active:bg-white active:border-black active:text-black">
                    <Link to="../rap">
                      <div className="flex justify-center">
                        <LiaMicrophoneAltSolid className="text-white text-5xl mb-1 active:text-black" />
                      </div>
                      <p className="font-bold text-2xl">Rap</p>
                    </Link>
                  </div>
                  {/* Rap - End */}

                  {/* BR - Start */}
                  <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 text-center active:bg-white active:border-black active:text-black">
                    <Link to="../brasilian">
                      <div className="flex justify-center">
                        <LiaDrumSolid className="text-white text-6xl active:text-black" />
                      </div>
                      <p className="font-bold text-lg">Brasileira</p>
                    </Link>
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
                      href="https://www.youtube.com/watch?v=1y6smkh6c-0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/dontworrychild.jpg"
                        alt="Don't worry child"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Don't worry child - <br />
                        Swedish House Mafia
                        <br />
                        ft. John Martin
                      </p>
                    </a>
                  </div>
                </div>
                {/* First Music - End */}

                {/* Second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=oRArmtMA9AI"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/fly.png"
                        alt="Fly"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Fly - <br />
                        Marshmello
                      </p>
                    </a>
                  </div>
                </div>
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=m7Bc3pLyij0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/happier.png"
                        alt="Fly"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Happier - <br />
                        Marshmello
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=YH18coS7c9E"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/shockwave.png"
                        alt="Shockwave"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Shockwave - <br />
                        Marshmello
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=CY8E6N5Nzec"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/friends.png"
                        alt="Friends"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Friends - <br />
                        Marshmello & <br />
                        Anne Marie
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=fiusxyygqGk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/you&me.png"
                        alt="You & Me"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        You & Me - <br />
                        Marshmello
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixth Music - End */}

                {/* Seventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=5y_KJAg8bHI"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/wakemeup.png"
                        alt="Wake me up"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Wake me up - <br />
                        Avicii
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventh Music - End */}

                {/* Eigth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=-ncIVUXZla8"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/waitingforlove.png"
                        alt="Waiting for love"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Waiting for love - <br />
                        Avicii
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eigth Music - End */}

                {/* Nineth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=_ovdm2yX4MA"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/levels.png"
                        alt="Levels"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Levels - <br />
                        Avicii
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineth Music - End */}

                {/* Tenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=WRz2MxhAdJo"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/withoutyou.png"
                        alt="Without You"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Without You - <br />
                        Avicii
                      </p>
                    </a>
                  </div>
                </div>
                {/* Tenth Music - End */}

                {/* Eleventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=YxIiPLVR6NA"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/hey-brother.png"
                        alt="Hey Brother"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Hey Brother - <br />
                        Avicii
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eleventh Music - End */}

                {/* Twenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=yKNxeF4KMsY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/yellow.png"
                        alt="Yellow"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Yellow -<br />
                        Coldplay
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenth Music - End */}

                {/* Thirteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=YykjpeuMNEk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/hym-for-the-weekend.png"
                        alt="Hym for the weekend"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Hym for the
                        <br /> weekend - Coldplay
                      </p>
                    </a>
                  </div>
                </div>
                {/* Thirteenth Music - End */}

                {/* Fourteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=uQpKzPCBqc4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/never-be-alone-again.jpg"
                        alt="Never be alone again"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Never be alone
                        <br /> again - Shadrow
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourteenth Music - End */}

                {/* Fifteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=1G4isv_Fylg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/paradise.png"
                        alt="Paradise"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Paradise -<br /> Coldplay
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifteenth Music - End */}

                {/* Sixteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=dvgZkm1xWPE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/viva-la-vida.png"
                        alt="Viva la vida"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Viva la vida -<br /> Coldplay
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixteenth Music - End */}

                {/* Seventeenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=F90Cw4l-8NY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/pompei.png"
                        alt="Pompei"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Pompei -<br /> Bastille
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventeenth Music - End */}

                {/* Eightteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=FM7MFYoylVs"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/something-just-like-this.png"
                        alt="Something just like this"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Something just like this
                        <br />- The Chainsmokers
                        <br />& Coldplay
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eightteenth Music - End */}

                {/* Nineteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ALZHF5UqnU4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/alone.png"
                        alt="Alone"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Alone -<br />
                        Marshmello
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineteenth Music - End */}

                {/* Twentieth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=A57B7B6w3kw"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/stars.png"
                        alt="Stars"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Stars -<br />
                        Marshmello
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
                      href="https://www.youtube.com/watch?v=vTZex-AXC6g"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/forever.png"
                        alt="Forever"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Forever - <br />
                        Marshmello X Pluko
                      </p>
                    </a>
                  </div>
                </div>
                {/* First Music - End */}

                {/* Second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=r-BhWxHjJuo"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/si-ai.png"
                        alt="Si ai"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt text-sm">
                        Tanya - Si ai
                        <br />
                        (Marshmello &<br />
                        UKAY Remix)
                      </p>
                    </a>
                  </div>
                </div>
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=yU0tnrEk8H4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/moving-on.png"
                        alt="Moving on"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Moving on -
                        <br />
                        Marshmello
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/heroes-tonight.png"
                        alt="Heroes tonight"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Heroes tonight -
                        <br /> Janji Ft.Johnning
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=l18A5BOTlzE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/the-living-tombstone.png"
                        alt="Five night's at freddy's"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Five night's at freddy's -
                        <br /> The Living Tombstone
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=gk-aCL6eyGc"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/its-been-so-long.png"
                        alt="Five night's at freddy's 2"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Five night's at freddy's 2
                        <br />- The Living Tombstone
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=AibtyCAhyQE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/die-on-fire.png"
                        alt="Five night's at freddy's 3"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Five night's at freddy's 3
                        <br />- The Living Tombstone
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixth Music - End */}

                {/* Seventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Fy8hK3blQOQ"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/i-need-some-sleep.png"
                        alt="I need some sleep"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        I need some sleep
                        <br />- Eels
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventh Music - End */}

                {/* Eigth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=gAjR4_CbPpQ"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/harder-better-faster-stronger.png"
                        alt="Harder, Better, Faster, Stronger"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Harder, Better, Faster,
                        <br />
                        Stronger - Daft Punk
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eigth Music - End */}

                {/* Nineth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ZvRlusdjMSs"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/controllah.png"
                        alt="Controllah"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Controllah -<br />
                        Gorillaz Ft.Mc Bin laden
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineth Music - End */}

                {/* Tenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=1V_xRb0x9aw"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/clint-eastwood.png"
                        alt="Clint Eastwood"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Clint Eastwood -<br />
                        Gorillaz
                      </p>
                    </a>
                  </div>
                </div>
                {/* Tenth Music - End */}
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

export default Eletronic;
