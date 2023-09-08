import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import PageNotFound from "./components/PageNotFound";

import "./scrollbar.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Applayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
