import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import PageOne from "../Pages/PageOne";
import PageTwo from "../Pages/PageTwo";
import Error from "../Pages/Error";
import PageThree from "../Pages/PageThree";
import PageFour from "../Pages/PageFour";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<PageOne />} />
      <Route path="/page2" element={<PageTwo />} />
      <Route path="/page3" element={<PageThree />} />
      <Route path="/page4" element={<PageFour />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRoute;
