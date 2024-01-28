import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./templates/Login";
import SignUpStep1 from "./templates/signup/SignUpStep1";
import SignUpStep2 from "./templates/signup/SignUpStep2";
import SignUpStep3 from "./templates/signup/SignUpStep3";
import Main from "./templates/main/Main";
import AlcoholPage from "./templates/drink/Drink";
import Snack from "./templates/main/Snack";
import Modal from "./component/Modal";
import { Provider as JotaiProvider } from "jotai";
import MemberShip from "./templates/main/MemberShip";
import MemberShipBuy from "./templates/main/MemberShipBuy";
import MemberShipPay from "./templates/main/MemberShipPay";
import Pay from "./templates/Pay";
import Detail from "./templates/main/Detail";
import Cheerup from "./templates/main/Cheerup";

const App = () => {
  return (
    <JotaiProvider>
      <BrowserRouter>
        <Modal />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/drink" element={<AlcoholPage />} />
          <Route path="/login/:id" element={<Detail />} />
          <Route path="/:type/:id" element={<Detail />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/cheerup" element={<Cheerup />} />
          <Route path="/membership" element={<MemberShip />} />
          <Route path="/membership/buy" element={<MemberShipBuy />} />
          <Route path="/membership/pay" element={<MemberShipPay />} />
          <Route path="/signup/step/1" element={<SignUpStep1 />} />
          <Route path="/signup/step/2" element={<SignUpStep2 />} />
          <Route path="/signup/step/3" element={<SignUpStep3 />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </JotaiProvider>
  );
};

export default App;
