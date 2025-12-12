import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import U30Series from "./Components/FlatPanelBoard/U30Series";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home/U30Series/" element={<U30Series/>}></Route>
          <Route path="/header" element={<Header/>}></Route>
          <Route path="/footer" element={<Footer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
