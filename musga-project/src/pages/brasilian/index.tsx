import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiGuitar, GiMusicalKeyboard } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoHeadset, IoHome } from "react-icons/io5";
import { LiaDrumSolid, LiaMicrophoneAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Brasilian() {
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
                  <div className="bg-gray8 border-white border-solid border-[4.1px] active:bg-white active:border-black active:text-black h-24 w-24 p-1 text-center text-white">
                    <Link to="../rap">
                      <div className="flex justify-center">
                        <LiaMicrophoneAltSolid className="text-5xl mb-1 text-white" />
                      </div>
                      <p className="font-bold text-2xl">Rap</p>
                    </Link>
                  </div>
                  {/* Rap - End */}

                  {/* BR - Start */}
                  <div className="active:bg-white active:border-black active:text-black bg-white border-black border-solid border-[6px] h-24 w-24 text-center text-black">
                    <a href="#">
                      <div className="flex justify-center">
                        <LiaDrumSolid className="text-6xl text-black" />
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
                {/* First Music - End */}

                {/* Second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=A9kTV-wpiWk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/azul-da-cor-do-mar.png"
                        alt="Azul da cor do mar"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Azul da cor do
                        <br />
                        mar - Tim Maia
                      </p>
                    </a>
                  </div>
                </div>
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Ubfc7gTH7vo"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/você.png"
                        alt="Você"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Você -
                        <br />
                        Tim Maia
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=cxSzri346W0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/gostava-tanto-de-voce.png"
                        alt="Gostava tanto de você"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Gostava tanto de
                        <br />
                        você - Tim Maia
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=syqJAgTQdlU"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/ela-partiu.png"
                        alt="Ela Partiu"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Ela Partiu -
                        <br />
                        Tim Maia
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=PDQrcz4KUKs"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/me-de-motivo.png"
                        alt="Me dê motivo"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Me dê motivo -
                        <br />
                        Tim Maia
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixth Music - End */}

                {/* Seventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=FM2tZnIPZUk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/so-quero-amar.png"
                        alt="Não quero dinheiro"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Não quero dinheiro
                        <br /> - Tim Maia
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventh Music - End */}

                {/* Eigth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=qBBwXuEV4jA"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/eu-amo-voce.png"
                        alt="Eu amo você"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Eu amo você
                        <br /> - Tim Maia
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eigth Music - End */}

                {/* Nineth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=btPJPFnesV4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/diasdeluta.jpg"
                        alt="Dias de luta dias de glória"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Dias de luta dias
                        <br />
                        de glória - <br />
                        Charlie Brown Jr
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineth Music - End */}

                {/* Tenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=wBfVsucRe1w"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/construcao.png"
                        alt="Construção"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Construção - <br />
                        Chico Buarque
                      </p>
                    </a>
                  </div>
                </div>
                {/* Tenth Music - End */}

                {/* Eleventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=0dU4mLOHGIQ"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/roda-viva.png"
                        alt="Roda Viva"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Roda Viva - <br />
                        Chico Buarque
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eleventh Music - End */}

                {/* Twenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Kk4bQtpxFhk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/meu-guri.png"
                        alt="O meu guri"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        O meu guri - <br />
                        Chico Buarque
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenth Music - End */}

                {/*  Thirteenth Music - Start  */}
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
                {/* Thirteenth Music - End */}

                {/* Fourteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=qL9VDKaSO_s"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/te-assumi-pro-brasil.png"
                        alt="Te assumi pro Brasil"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Te assumi pro Brasil
                        <br /> - Matheus & Kauan
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourteenth Music - End */}

                {/* Fifteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=z-weWuwFmKM"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/lana.png"
                        alt="Lana"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Lana -<br /> Kamaitachi
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifteenth Music - End */}

                {/* Sixteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=9sg-A-eS6Ig"
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
                {/* Sixteenth Music - End */}

                {/* Seventeenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=qGCq4wrQhSg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/julieta.png"
                        alt="Julieta"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Julieta -<br /> Kamaitachi
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventeenth Music - End */}

                {/* Eightteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=K-YCjqJTOfE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/casa.png"
                        alt="Casa Mobiliada"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Casa Mobiliada -<br />
                        Israel e Rodolffo
                        <br />
                        Part.Edson e Hudson
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eightteenth Music - End */}

                {/* Nineteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=pWpsE8Rr9mI"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/dona-morte.png"
                        alt="Dona Morte"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Dona Morte
                        <br />- Nasac
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineteenth Music - End */}

                {/* Twentieth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=wo4pWZApd2Y"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/deixa-acontecer.png"
                        alt="Deixa acontecer"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Deixa acontecer -<br /> Grupo Revelação
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twentieth Music - End */}

                {/* Twenty-first Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=EjjCdwxYs3w"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/cupido.png"
                        alt="Cuidado Cupido"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Cuidado Cupido -<br /> Péricles Part.
                        <br />
                        Luan Santana
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenty-first - End */}

                {/* Twenty-second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=KdvsXn8oVPY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/flores.png"
                        alt="Pra não dizer que não falei das flores"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Pra não dizer que
                        <br /> não falei das flores
                        <br />- Geraldo Vandré
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenty-second - End */}

                {/* Twenty-third - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=eyn-kjPgMY0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/punpun.png"
                        alt="Goodnight"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Goodnight - <br />
                        Shaman
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenty-third - End */}
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
                      href="https://www.youtube.com/watch?v=TQ5DUv_ZwRg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/1kilo.png"
                        alt="Deixe-me ir"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Deixe-me ir - <br />1 Kilo
                      </p>
                    </a>
                  </div>
                </div>
                {/* First Music - End */}

                {/* Second Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=LT8C5kYwcpA"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/taka.png"
                        alt="Vivendo o passado"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Vivendo o<br />
                        passado - Taka
                      </p>
                    </a>
                  </div>
                </div>
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=xJG1qfm9v7Y"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/frankenstein.png"
                        alt="Frankenstein"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Frankenstein (Parte por
                        <br />
                        Parte) - Chrono
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=o6bSuclgy5w"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/arde-outra-vez.png"
                        alt="Arde outra vez"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Arde outra vez -
                        <br />
                        Thalles Roberto
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=iyJDuJggiEM"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/velha-infancia.png"
                        alt="Velha Infância"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Velha Infância -<br /> Tribalistas
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Nq_AOktdhts"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/ela-partiu.png"
                        alt="Que Beleza!"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Que Beleza!
                        <br /> - Tim Maia
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixth Music - End */}

                {/* Seventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=0dLX40UMUKo"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/ceu-azul.png"
                        alt="Céu azul"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Céu azul - <br />
                        Charlie Brown Jr
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventh Music - End */}

                {/* Eigth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=agH2bBnNUCs"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/joao-maria.png"
                        alt="João e Maria"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        João e Maria -<br />
                        Chico Buarque
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eigth Music - End */}

                {/* Nineth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=G9RS2BkbqHw"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/alo-menino.png"
                        alt="Bola de meia, Bola de gude"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Bola de meia,
                        <br /> Bola de gude -<br />
                        Milton Nascimento
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineth Music - End */}

                {/* Tenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=JFQN_Szdjb4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/brasil-de-quem.png"
                        alt="Brasil de quem?"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Brasil de quem?
                        <br />- Mc SId
                      </p>
                    </a>
                  </div>
                </div>
                {/* Tenth Music - End */}

                {/* Eleventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=YW4-V0xQkTg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/piloto-automatico.png"
                        alt="Piloto Automático"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Piloto Automático - <br />
                        Supercombo
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eleventh Music - End */}

                {/* Twenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=vRiA8cq0ZtA"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/amianto.png"
                        alt="Amianto"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Amianto - <br />
                        Supercombo
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenth Music - End */}

                {/* Thirteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=wDj80rc5QCM"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/nerds.png"
                        alt="A sociedade dos nerds psicóticos"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        A sociedade dos
                        <br />
                        nerds psicóticos -<br /> Kamaitachi
                      </p>
                    </a>
                  </div>
                </div>
                {/* Thirteenth Music - End */}

                {/* Fourteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=FS5rz-lWBIM"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/minha-juventude.png"
                        alt="Minha juventude Part.1 e 2"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Minha juventude
                        <br />
                        Part.1 e 2 - Mr.Gyn
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourteenth Music - End */}

                {/* Fifteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=1vI6BKcbstY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/sou-vitorioso.png"
                        alt="Sou Vitorioso"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Sou Vitorioso -<br />
                        MC Lele JP e MC
                        <br />
                        Neguinho do Kaxeta
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifteenth Music - End */}

                {/* Sixteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Ubol9NyLWZc"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/chove-chuva.png"
                        alt="Chove Chuva"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Chove Chuva -<br /> Jorge Ben
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

export default Brasilian;
