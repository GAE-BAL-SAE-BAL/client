import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Pay = () => {
  useEffect(() => {
    toast("서비스를 확장할 때 곧 구현할 예정이에요!", {
      icon: "ℹ",
    });
  }, []);
  return <img src="/toss.PNG" className="fixed -top-8" alt="pay" />;
};

export default Pay;
