import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { GiGuitar, GiMusicalKeyboard } from "react-icons/gi";
import { IoHeadset } from "react-icons/io5";
import { LiaDrumSolid, LiaMicrophoneAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Pop() {

  return (
    <div>

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
                  <div className="border-solid border-[6px] h-24 w-24 text-center bg-white border-black text-black">
                    <Link to="../pop" className="active:text-black">
                      <div className="flex justify-center">
                        <IoHeadset className="text-black text-5xl mb-1" />
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
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
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
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
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
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=7YvAYIJSSZY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/watchingme.jpg"
                        alt="Somebody's watching me"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Somebody's watching
                        <br />
                        me- Rockwell and
                        <br /> Michael Jackson
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
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
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
                {/* Tenth Music - End */}

                {/* Eleventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ApXoWvfEYVU"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/sunflower.png"
                        alt="Sunflower"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Sunflower - <br />
                        Post Malone Ft.Swae Lee
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eleventh Music - End */}

                {/* Twenth Music - Start */}
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
                {/* Twenth Music - End */}

                {/*  Thirteenth Music - Start  */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=oRdxUFDoQe0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/beatit.png"
                        alt="Beat it"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Beat it -
                        <br /> Michael Jackson
                      </p>
                    </a>
                  </div>
                </div>
                {/* Thirteenth Music - End */}

                {/* Fourteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Z85lxckrtzg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/thriller.png"
                        alt="Rhriller"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Thriller - <br />
                        Michael Jackson
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourteenth Music - End */}

                {/* Fifteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=pAyKJAtDNCw"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/youarenotalone.png"
                        alt="You are not alone"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        You are not alone -<br /> Michael Jackson
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifteenth Music - End */}

                {/* Sixteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ho7796-au8U"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/abc.png"
                        alt="ABC"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        ABC -<br /> Jackson 5
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixteenth Music - End */}

                {/* Seventeenth Music - Start */}
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
                {/* Seventeenth Music - End */}

                {/* Eightteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Ro7yHf_pU14"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/dangerous.png"
                        alt="Dangerous"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        Dangerous -<br /> Kardinal Offishall
                        <br /> Ft.Akon
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eightteenth Music - End */}

                {/* Nineteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=y74UPiaK7u0"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/dontworry.png"
                        alt="Don't Worry"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Don't Worry -<br /> Madcon Ft.Ray Dalton
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineteenth Music - End */}

                {/* Twentieth Music - Start */}
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
                {/* Twentieth Music - End */}

                {/* Twenty-first Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=afLScXH8uts"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/arcade.png"
                        alt="Arcade"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Arcade -<br /> Duncan Laurence
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
                      href="https://www.youtube.com/watch?v=ZbZSe6N_BXs"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/thatswhatilike.png"
                        alt="Happy"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        That's what i like - <br />
                        Bruno Mars
                      </p>
                    </a>
                  </div>
                </div>
                {/* First Music - End */}

                {/* Second Music - Start */}
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
                {/* Second Music - End */}

                {/* Third Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=zABLecsR5UE"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/someoneyouloved.png"
                        alt="Someone you loved"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Someone you loved - <br />
                        Lewis Capaldi
                      </p>
                    </a>
                  </div>
                </div>
                {/* Third Music - End */}

                {/* Fourth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=d_HlPboLRL8"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/runaway.png"
                        alt="Runaway"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Runaway - <br />
                        Aurora
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fourth Music - End */}

                {/* Fifth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=hT_nvWreIhg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/countingstars.png"
                        alt="Counting stars"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Counting stars - <br />
                        OneRepublic
                      </p>
                    </a>
                  </div>
                </div>
                {/* Fifth Music - End */}

                {/* Sixth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=KBtk5FUeJbk"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/cradles.png"
                        alt="Cradles"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Cradles -
                        <br /> Sub Urban
                      </p>
                    </a>
                  </div>
                </div>
                {/* Sixth Music - End */}

                {/* Seventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=Mvaosumc4hU"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/toxic.png"
                        alt="Toxic"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Toxic - <br />
                        Boy With Uke
                      </p>
                    </a>
                  </div>
                </div>
                {/* Seventh Music - End */}

                {/* Eigth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=ekzHIouo8Q4"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/wasyourman.png"
                        alt="Was your man"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Was your man - <br />
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
                      href="https://www.youtube.com/watch?v=qQzdAsjWGPg"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/myway.png"
                        alt="My way"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        My way - <br />
                        Frank Sinatra
                      </p>
                    </a>
                  </div>
                </div>
                {/* Nineth Music - End */}

                {/* Tenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=I_izvAbhExY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/stayingalive.png"
                        alt="Staying Alive"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Staying Alive - <br />
                        Bee Gees
                      </p>
                    </a>
                  </div>
                </div>
                {/* Tenth Music - End */}

                {/* Eleventh Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=EOFA9kPQ_uU"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/hideinthesand.png"
                        alt="Hide in the sand"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1">
                        Hide in the sand - <br />
                        Tally Hall
                      </p>
                    </a>
                  </div>
                </div>
                {/* Eleventh Music - End */}

                {/* Twenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=D_P-v1BVQn8"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/aloneagain.png"
                        alt="Alone again"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-2 text-sm">
                        Alone again -<br /> Gillbert O'Sullivan
                      </p>
                    </a>
                  </div>
                </div>
                {/* Twenth Music - End */}

                {/*  Thirteenth Music - Start  */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=-oCCnxBos10"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/hold-my-hand.png"
                        alt="Hold my hand"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-3 text-xs">
                        Hold my hand - <br />
                        Michael Jackson Ft.Akon
                      </p>
                    </a>
                  </div>
                </div>
                {/* Thirteenth Music - End */}

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

                {/* Sixteenth Music - Start */}
                <div className="border-white border-solid border-[3px] h-64 w-36 rounded-2xl bg-gray8">
                  <div className="flex-col justify-center items-center text-center">
                    <a
                      href="https://www.youtube.com/watch?v=tLcfAnN2QgY"
                      className="flex-col justify-center items-center text-center"
                    >
                      <img
                        src="../public/images/elperdedor.png"
                        alt="El perdedor"
                        className="w-screen h-48 border-b-2 border-white rounded-t-xl"
                      />
                      <p className="flex justify-center text-start font-semibold mt-1 text-xs">
                        El perdedor -<br /> Enrique Iglesias Ft.
                        <br />
                        Marco Antonio Sólis
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

export default Pop;
