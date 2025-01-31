import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { GiGuitar, GiMusicalKeyboard } from "react-icons/gi";
import { IoHeadset } from "react-icons/io5";
import { LiaDrumSolid, LiaMicrophoneAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="">
      <div className="">

        {/* Content - Start */}
        <div className="p-4">
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
          <div className="-mt-3 w-99 md:flex items-center gap-16 justify-end md:w-full lg:hidden ">
            <h1 className="font-semibold text-2xl md:text-3xl">Gêneros</h1>
            <div className="scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg ">
              <div className="flex w-100 md:w-full">
                <div className="flex gap-3 w-39 md:w-full">
                  <div className="flex pt-4 gap-5 ">
                    {/* Rock - Start */}
                    <div className="bg-gray8 border-white border-solid border-[4.1px] h-24 w-24 p-2 text-center active:bg-white active:border-black active:text-black">
                      <Link to="../rock">
                        <div className="flex justify-center ">
                          <GiGuitar className="text-white text-5xl active:text-black" />
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
                      <Link to="../eletronic">
                        <div className="flex justify-center">
                          <GiMusicalKeyboard className="text-white text-6xl active:text-black" />
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

          {/* Historic - Start */}
          <div className="scrollA mt-5 lg:mt-0 w-99 md:w-full ">
            <h1 className="font-semibold text-2xl md:text-3xl">
              Ouvidas Recentemente
            </h1>
            <div className=" scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg md:w-full xl:max-w-screen-xxl">
              <div className="flex w-100 md:w-full ">
                <div className="flex gap-3 w-39 md:w-full ">
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

                    {/* Eigth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=fXw0jcYbqdo"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/moon.jpg"
                            alt="Talking to the moon"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                            Talking to the moon - <br />
                            Bruno Mars
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Eigth Music - End */}

                    {/* Nineth Music - Start */}
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
                    {/* Nineth Music - End */}

                    {/* Tenth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=k5mX3NkA7jM"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/maryon.jpg"
                            alt="Maryon"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Mary on a cross - <br />
                            Ghost
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Tenth Music - End */}

                    {/* Eleventh Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=L7mfjvdnPno"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/falling.jpg"
                            alt="Falling"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Falling - <br />
                            Trevor Daniel
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Eleventh Music - End */}

                    {/* Twenth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=GjVoB8zQQ6o"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/overthegardenwall.jpg"
                            alt="Over the garden wall"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Calm Over the
                            <br />
                            garden Wall songs
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Twenth Music - End */}

                    {/* Thirteenth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=JGwWNGJdvx8"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/shapeofyou.jpg"
                            alt="Shape of you"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Shape of you - <br />
                            Ed Sheeran
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Thirteenth Music - End */}

                    {/* Fourteenth Music - Start */}
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
                    {/* Fourteenth Music - End */}

                    {/* Fifteenth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=GjVoB8zQQ6o"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/subemelaradio.jpg"
                            alt="Subeme la radio"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Subeme la radio - <br />
                            Enrique Iglesias
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fifteenth Music - End */}
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
            <div className="scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg xl:max-w-screen-xxl">
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

                    {/* Eigth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=aLEhh_XpJ-0"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/saysaysay.png"
                            alt="Say Say Say..."
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                            Say Say Say - <br />
                            Michael Jackson and
                            <br /> Paul MacCartney
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Eigth Music - End */}

                    {/* Nineth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=Y7ix6RITXM0"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/maps.jpg"
                            alt="Maps"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Maps - <br />
                            Maroon 5
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Nineth Music - End */}

                    {/* Tenth Music - Start */}
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
                    {/* Tenth Music - End */}

                    {/* Eleventh Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=gb4c9c4Z_Qc"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/hero.jpg"
                            alt="The joy and the sorrow"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                            The joy and the sorrow - <br />
                            Johannes Bornlof
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Eleventh Music - End */}

                    {/* Twenth Music - Start */}
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
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Eye of the tiger - <br />
                            Survivor
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Twenth Music - End */}

                    {/*  Thirteenth Music - Start  */}
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
                    {/* Thirteenth Music - End */}

                    {/* Fourteenth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=fKopy74weus"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/thunder.jpg"
                            alt="Thunder"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Thunder - <br />
                            Imagine Dragons
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fourteenth Music - End */}

                    {/* Fifteenth Music - Start */}
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
                    {/* Fifteenth Music - End */}
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
            <div className="scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg xl:max-w-screen-xxl">
              <div className="flex w-100 md:w-full">
                <div className="flex gap-3 w-39 md:w-full">
                  {/*Musics - Start */}
                  <div className="flex pt-4 gap-5">
                    {/* First Music - Start */}
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
            <div className="scrollA md:flex justify-center items-center text-center overflow-x-auto max-w-screen-lg xl:max-w-screen-xxl">
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

                    {/* Seventh Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=izGwDsrQ1eQ"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/deadpool.jpg"
                            alt="Careless Whisper"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-1">
                            Careless Whisper - <br />
                            George Michael
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Seventh Music - End */}

                    {/* Eigth Music - Start */}
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
                            Master of puppets - <br />
                            Metalica
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Eigth Music - End */}

                    {/* Nineth Music - Start */}
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
                    {/* Nineth - End */}

                    {/* Tenth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=ZbZSe6N_BXs"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/happy.jpg"
                            alt="Happy"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Happy - <br />
                            Pharrell Williams
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Tenth - End */}

                    {/* Eleventh Music - Start */}
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
                    {/* Eleventh Music - End */}

                    {/* Twenth Music - Start */}
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
                    {/* Twenth Music - End */}

                    {/*  Thirteenth Music - Start  */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=kPBzTxZQG5Q"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/herewithoutyou.jpg"
                            alt="Here without you"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                            Here without you - <br />3 Doors Down
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Thirteenth Music - End */}

                    {/* Fourteenth Music - Start */}
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
                    {/* Fourteenth Music - End */}

                    {/* Fifteenth Music - Start */}
                    <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                      <div className="flex-col justify-center items-center text-center">
                        <a
                          href="https://www.youtube.com/watch?v=9Zj0JOHJR-s"
                          className="flex-col justify-center items-center text-center"
                        >
                          <img
                            src="../public/images/myordinarylife.png"
                            alt="My ordinary life"
                            className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                          />
                          <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                            My ordinary life - <br />
                            The Living Tombonstone
                          </p>
                        </a>
                      </div>
                    </div>
                    {/* Fifteenth Music - End */}
                  </div>
                  {/*Musics - End */}
                </div>
              </div>
            </div>
          </div>
          {/* For You - End */}
        </div>
        {/* Content - End */}
      </div>
    </div>
  );
}

export default Home;
