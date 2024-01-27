import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUpStep1 from "./pages/signup/SignUpStep1";
import SignUpStep2 from "./pages/signup/SignUpStep2";
import SignUpStep3 from "./pages/signup/SignUpStep3";
import Main from "./pages/main/Main";
import Snack from "./pages/main/Snack";
import Modal from "./components/Modal";
import { Provider as JotaiProvider } from "jotai";
import MemberShip from "./pages/main/MemberShip";

const App = () => {
  return (
    <JotaiProvider>
      <BrowserRouter>
        <Modal />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/membership" element={<MemberShip />} />
          <Route path="/signup/step/1" element={<SignUpStep1 />} />
          <Route path="/signup/step/2" element={<SignUpStep2 />} />
          <Route path="/signup/step/3" element={<SignUpStep3 />} />
        </Routes>
      </BrowserRouter>
    </JotaiProvider>
  );
};

export default App;
