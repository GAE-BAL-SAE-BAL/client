import React from "react";
import Logo from "../assets/Logo";
import Person from "../assets/Person";
import { useModal } from "../hooks/useModal";

const Header = () => {
  const { openModal } = useModal();
  return (
    <hgroup className="flex items-center justify-between">
      <Logo />
      <div
        onClick={() =>
          openModal({
            component: <h1>asdlsandals</h1>,
          })
        }
      >
        <Person />
      </div>
    </hgroup>
  );
};

export default Header;
