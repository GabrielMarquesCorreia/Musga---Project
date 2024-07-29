import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
