import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login";
import Home from "../home";
import Rock from "../rock";

export function Router() {
  return (
    <BrowserRouter>
      <div className="bg-phone-1 md:bg-tablet-1 lg:bg-desktop-1 xl:bg-desktop-2 xxl:bg-desktop-3 bg-no-repeat w-full h-screen bg-fixed bg-cover overflow-x-hidden ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rock" element={<Rock />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
