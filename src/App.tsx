import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/" element={<></>} />
        <Route path="/" element={<></>} />
        <Route path="/" element={<></>} />
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
