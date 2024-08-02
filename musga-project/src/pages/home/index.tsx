import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaMusic } from "react-icons/fa";
import { GiGuitar, GiMusicalKeyboard, GiViolin } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoHeadset, IoHome } from "react-icons/io5";
import { LiaMicrophoneAltSolid } from "react-icons/lia";

function Home() {
  const [isFirstModalVisible, setIsFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const showFirstModal = () => setIsFirstModalVisible(true);
  const hideFirstModal = () => setIsFirstModalVisible(false);
  const showSecondModal = () => setIsSecondModalVisible(true);
  const hideSecondModal = () => setIsSecondModalVisible(false);

  return (
    <div className="">
      <div className="bg-phone-1 md:bg-tablet-1 lg:bg-desktop-1 xl:bg-desktop-2 xxl:bg-desktop-3 bg-no-repeat w-full h-screen bg-fixed bg-cover overflow-x-hidden">
        {/* Header - Inicio */}
        <header className="w-full h-16 bg-bgBlack flex items-center justify-end p-4 gap-24 md:gap-52 lg:gap-32">
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
              className="w-40 md:w-44 xl:w-96 flex"
            />
          </div>
          <div className="sm:hidden lg:flex gap-5 items-center">
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
              <p className="text-white text-xl">Gênero</p>
              <IoIosArrowDown className="text-white text-2xl" />
            </div>
            <Modal
              visible={isFirstModalVisible}
              onCancel={hideFirstModal}
              footer={null}
              closable={false}
              className="modal-2 sm:hidden lg:flex"
              bodyStyle={{ padding: 0, margin: 0 }}
            ></Modal>
          </div>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#" className=" flex items-center gap-5 lg:hidden">
              <CgProfile className="text-white text-4xl" />
            </a>
            <div className="flex items-center gap-3">
              <SearchOutlined className="text-4xl" />
              <Input
                className="bg-transparent placeholder:text-white placeholder:text-lg border-white border-solid border-[1px] rounded-xl w-72"
                placeholder="Pesquisar"
              />
            </div>
          </div>
        </header>
        {/* Header - Fim */}

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

        {/* Content - Start */}
        <div className="bg-black bg-opacity-40 bg-no-repeat bg-fixed bg-cover min-h-screen w-full p-4">
          {/* Search - Start */}
          <div className="pb-7 flex items-center gap-3 md:hidden">
            <SearchOutlined className="text-4xl" />
            <p className="text-2xl">Search</p>
            <Input
              className="bg-transparent placeholder:text-white placeholder:text-lg border-white border-solid border-[1px] rounded-xl"
              placeholder="Pesquisar"
            />
          </div>
          {/* Search - End */}

          {/* Genders - Start */}
          <div className="-mt-3 w-99 md:flex items-center gap-16 justify-end md:w-full">
            <h1 className="font-semibold text-3xl">Gêneros</h1>
            <div className="md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg ">
              <div className="flex w-100 md:w-full">
                <div className="flex gap-3 w-39 md:w-full">
                  <div className="flex pt-4 gap-5">
                    {/* Rock - Start */}
                    <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-2 text-center active:bg-white active:border-black active:text-black">
                      <a href="#">
                        <div className="flex justify-center ">
                          <GiGuitar className="text-white text-5xl active:text-black" />
                        </div>
                        <p className="font-bold text-2xl">Rock</p>
                      </a>
                    </div>
                    {/* Rock - End */}

                    {/* Pop - Start */}
                    <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-1 text-center active:bg-white active:border-black active:text-black">
                      <a href="#" className="active:text-black">
                        <div className="flex justify-center">
                          <IoHeadset className="text-white text-5xl mb-1 active:text-black" />
                        </div>
                        <p className="font-bold text-2xl">Pop</p>
                      </a>
                    </div>
                    {/* Pop - End */}

                    {/* Classical - Start */}
                    <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 text-center active:bg-white active:border-black active:text-black">
                      <a href="#">
                        <div className="flex justify-center">
                          <GiViolin className="text-white text-6xl active:text-black" />
                        </div>
                        <p className="font-bold text-xl">Clássica</p>
                      </a>
                    </div>
                    {/* Classical - End */}

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

          {/* Historic - Start */}
          <div className="mt-6 w-99 md:w-full">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Ouvidas Recentemente
            </h1>
            <div className="md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg md:w-full">
              <div className="flex w-100 md:w-full">
                <div className="flex gap-3 w-39 md:w-full">
                  {/*Musics - Start */}
                  <div className="flex pt-4 gap-5">
                    {/* First Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=vOXZkm9p_zY"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/birds.jpg"
                            alt="Birds"
                            className="w-screen h-48 border-b-2 border-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Birds - <br />
                            Imagine Dragons
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* First Music - End */}

                    {/* Second Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=PEM0Vs8jf1w"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/golden hour.jpg"
                            alt="Golden Hour"
                            className="w-screen h-48 border-b-2 border-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-[5px]">
                            Golden Hour -<br />
                            JVKE
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Second Music - End */}

                    {/* Third Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=PAUlCK8kuGU"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/tim maia.jpg"
                            alt="Descobridor dos 7 mares"
                            className="w-screen h-48 border-b-2 border-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Descobridor dos 7<br />
                            mares - Tim Maia
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Third Music - End */}

                    {/* Fourth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=9jK-NcRmVcw"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/final-countdown.jpg"
                            alt="The final countdown"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-3 text-sm">
                            The final countdown
                            <br /> - Europe
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fourth Music - End */}

                    {/* Fifth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=KrZHPOeOxQQ"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/bad-name.jpg"
                            alt="You give love a bad name"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            You give love a bad
                            <br /> name - Bon Jovi
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fifth Music - End */}

                    {/* Sixth Music - Start */}
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
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Radioactive - <br />
                            Imagine Dragons
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Sixth Music - End */}
                  </div>
                  {/*Musics - End */}
                </div>
              </div>
            </div>
          </div>
          {/* Historic - End */}

          {/* Comming Soon - Start */}
          <div className="mt-6 w-99 md:w-full">
            <h1 className="font-semibold text-3xl">Lançamentos</h1>
            <div className="md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg ">
              <div className="flex w-100 md:w-full">
                <div className="flex gap-3 w-39 md:w-full">
                  {/*Musics - Start */}
                  <div className="flex pt-4 gap-5">
                    {/* First Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=QNJL6nfu__Q"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/they-dont-care.png"
                            alt="They don't care about us"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                            They don't care <br /> about us - Michael
                            <br /> Jackson
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* First Music - End */}

                    {/* Second Music - Start */}
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
                    {/* Second Music - End */}

                    {/* Third Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=0dU4mLOHGIQ"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/roda-viva.jpg"
                            alt="Roda Viva"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Roda Viva -<br /> Chico Buarque
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Third Music - End */}

                    {/* Fourth Music - Start */}
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
                    {/* Fourth Music - End */}

                    {/* Fifth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=1rVY08gRGmA"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/fairytale.jpg"
                            alt="Fairytale"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Fairytale - <br />
                            Alexander Rybac
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fifth Music - End */}

                    {/* Sixth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=l9PxOanFjxQ"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/immortals.jpg"
                            alt="Immortals"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Immortals - <br />
                            Fall out boy
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Sixth Music - End */}

                    {/* Seventh Music - Start */}
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
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Radioactive - <br />
                            Imagine Dragons
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Seventh Music - End */}
                  </div>
                  {/*Musics - End */}
                </div>
              </div>
            </div>
          </div>
          {/* Comming Soon - End */}

          {/* Top Hits - Start */}
          <div className="mt-6 w-99 md:w-full">
            <h1 className="font-semibold text-3xl">Top 10 do mês</h1>
            <div className="md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg ">
              <div className="flex w-100 md:w-full">
                <div className="flex gap-3 w-39 md:w-full">
                  {/*Musics - Start */}
                  <div className="flex pt-4 gap-5">
                    {/* First Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=WuenyQ4NCQE"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/garota de ipanema.png"
                            alt="Garota de Ipanema"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl bg-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                            Garota de Ipanema <br /> - Antônio Carlos Jobim
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* First Music - End */}

                    {/* Second Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=A_MjCqQoLLA"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/hey jude.jpg"
                            alt="Hey jude"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start mt-[3.5px] font-semibold">
                            Hey jude -<br /> The Beatles
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Second Music - End */}

                    {/* Third Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=vOXZkm9p_zY"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/birds.jpg"
                            alt="Birds"
                            className="w-screen h-48 border-b-2 border-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Birds - <br />
                            Imagine Dragons
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Third Music - End */}

                    {/* Fourth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=ZHwVBirqD2s"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/still-stand.jpg"
                            alt="I'm still stand"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            I'm still stand - <br />
                            Elton John
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fourth Music - End */}

                    {/* Fifth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=IPXIgEAGe4U"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/high hopes.jpg"
                            alt="High Hopes"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            High Hopes - <br />
                            Panic! At The Disco
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fifth Music - End */}

                    {/* Sixth Music - Start */}
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
                          href="https://www.youtube.com/watch?v=LHvYrn3FAgI"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/hero.jpg"
                            alt="Superhero"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Superhero -<br />
                            Unknow Brain
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Eigth Music - End */}

                    {/* Ninth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=HgzGwKwLmgM"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/queen.jpg"
                            alt="Don't stop me now"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Don't stop me now -<br /> Queen
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Ninth Music - End */}

                    {/* Tenth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=Tm8LGxTLtQk"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/linkin-park.jpg"
                            alt="One more light"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            One more light -<br /> Linkin Park
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Tenth Music - End */}
                  </div>
                  {/*Musics - End */}
                </div>
              </div>
            </div>
          </div>
          {/* Top Hits - End */}

          {/* For You - Start */}
          <div className="mt-6 w-99 md:w-full">
            <h1 className="font-semibold text-3xl">Recomendadas</h1>
            <div className="md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg ">
              <div className="flex w-100 md:w-full">
                <div className="flex gap-3 w-39 md:w-full">
                  {/*Musics - Start */}
                  <div className="flex pt-4 gap-5">
                    {/* First Music - Start */}
                    <div className="border-white border-solid border-[1px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=7IpP6j7je5A"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/skillet.png"
                            alt="Survive the game"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl bg-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Survive the game <br /> - Skillet
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* First Music - End */}

                    {/* Second Music - Start */}
                    <div className="border-white border-solid border-[1px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=7wtfhZwyrcc"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/beliver.jpg"
                            alt="Beliver"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl bg-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Beliver <br /> - Imagine Dragons
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Second Music - End */}

                    {/* Third Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=eVTXPUF4Oz4"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/linkin-park.jpg"
                            alt="In the end"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl bg-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            In the end <br /> - Linkin Park
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Third Music - End */}

                    {/* Fourth Music - Start */}
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
                    {/* Fourth Music - End */}

                    {/* Fifth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=bWnS2dIDgQA"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/futs.jpg"
                            alt="No flow"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl bg-white"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            País do Futebol <br /> - Mc Guimê
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fifth Music - End */}

                    {/* Sixth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=V5M2WZiAy6k"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/natural.png"
                            alt="Natural"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Natural - <br />
                            Imagine Dragons
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Sixth Music - End */}
                  </div>
                  {/*Musics - End */}
                </div>
              </div>
            </div>
          </div>
          {/* For You - End */}
        </div>
        {/* Content - End */}

        {/* Footer - Start */}
        <div className="w-screen h-36 md:h-32 bg-gray8 md:mt-3 md:flex md:items-center md:justify-end">
          <footer className="pt-2 md:p-4 md:pt-0 pl-5 pr-5 md:flex md:items-center md:gap-[4rem]">
            <img
              src="../public/images/logo.png"
              alt="Logo"
              className="w-24 md:w-52 flex "
            />
            <div className="md:flex-col">
              <div className="mt-2">
                <a
                  href="https://github.com/GabrielMarquesCorreia/Musga---Project"
                  className="flex items-center"
                >
                  <FaGithub className="text-2xl md:text-5xl mr-3" />
                  <p className="text-xs md:text-sm pt-1">
                    https://github.com/GabrielMarquesCorreia/Musga---Project
                  </p>
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="https://www.linkedin.com/in/gabriel-marques-correia-077949232/"
                  className="flex items-center"
                >
                  <FaLinkedin className="text-2xl md:text-5xl mr-3" />
                  <p className="text-xs md:text-sm pt-1">
                    https://www.linkedin.com/in/gabriel-marques-correia-077949232/
                  </p>
                </a>
              </div>
            </div>
          </footer>
        </div>
        {/* Footer - End */}
      </div>
    </div>
  );
}

export default Home;
