import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUpStep1 from "./pages/signup/SignUpStep1";
import SignUpStep2 from "./pages/signup/SignUpStep2";
import SignUpStep3 from "./pages/signup/SignUpStep3";
import Main from "./pages/main/Main";
import AlcoholPage from "./pages/drink/Drink";
import Snack from "./pages/main/Snack";
import Modal from "./components/Modal";
import { Provider as JotaiProvider } from "jotai";
import MemberShip from "./pages/main/MemberShip";
import MemberShipBuy from "./pages/main/MemberShipBuy";
import MemberShipPay from "./pages/main/MemberShipPay";
import Pay from "./pages/Pay";
import Detail from "./pages/main/Detail";
import Cheerup from "./pages/main/Cheerup";

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
          <Route path="/drink/:id" element={<Detail />} />
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
    </JotaiProvider>
  );
};

export default App;
