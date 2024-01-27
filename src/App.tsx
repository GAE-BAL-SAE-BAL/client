import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdInputPage from "./page/IdInputPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/signup" element={<IdInputPage />} />
        <Route path="/" element={<></>} />
        <Route path="/" element={<></>} />
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
