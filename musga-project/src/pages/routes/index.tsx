import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

  return (
    <UserProvider>
      <div className="bg-phone-1 md:bg-tablet-1 lg:bg-desktop-1 xl:bg-desktop-2 xxl:bg-desktop-3 bg-no-repeat w-full h-screen bg-fixed bg-cover overflow-x-hidden">
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
