import React from "react";
import Logo from "../assets/Logo";
import Person from "../assets/Person";
import { useModal } from "../hooks/useModal";
import MyPageModal from "./MyPageModal";

const Header = () => {
  const { openModal, visible } = useModal();
  return (
    <hgroup className="flex items-center justify-between">
      <Logo />
      <div
        onClick={() =>
          openModal({
            component: <MyPageModal />,
          })
        }
      >
        <Person visible={visible} />
      </div>
    </hgroup>
  );
};

export default Header;
