import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpStep1 from "./pages/signup/SignUpStep1";
import SignUpStep2 from "./pages/signup/SignUpStep2";
import SignUpStep3 from "./pages/signup/SignUpStep3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/" element={<></>} />
        <Route path="/signup" element={<SignUpStep1 />} />
        <Route path="/signup/step/2" element={<SignUpStep2 />} />
        <Route path="/signup/step/3" element={<SignUpStep3 />} />
        <Route path="/" element={<></>} />
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
