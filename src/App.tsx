import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUpStep1 from "./pages/signup/SignUpStep1";
import SignUpStep2 from "./pages/signup/SignUpStep2";
import SignUpStep3 from "./pages/signup/SignUpStep3";
import Main from "./pages/main/Main";
import Snack from "./pages/main/Snack";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/snack" element={<Snack />} />
        <Route path="/signup/step/1" element={<SignUpStep1 />} />
        <Route path="/signup/step/2" element={<SignUpStep2 />} />
        <Route path="/signup/step/3" element={<SignUpStep3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
