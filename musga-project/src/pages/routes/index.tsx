import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login";
import Home from "../home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
