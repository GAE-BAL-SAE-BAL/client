import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpStep2 from "./pages/signup/SignUpStep2";
import SignUpStep3 from "./pages/signup/SignUpStep3";
import IdInputPage from "./page/IdInputPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/signup" element={<IdInputPage />} />
        <Route path="/" element={<></>} />
        <Route path="/signup/step/2" element={<SignUpStep2 />} />
        <Route path="/signup/step/3" element={<SignUpStep3 />} />
        <Route path="/" element={<></>} />
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
