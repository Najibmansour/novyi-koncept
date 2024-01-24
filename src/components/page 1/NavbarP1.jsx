import React from "react";
import Logo from "../svgs/logo/Logo";

const NavbarP1 = () => {
  return (
    <div className="navbar  lg:mb-10 px-10 lg:pt-20 pt-10 lg:pl-28 items-center">
      <div className="w-full lg:flex grid gap-4 place-items-stretch ">
        <Logo className="lg:w-24 w-16 lg:absolute " />
        <p className="text-white font-bold w-[100%] text-center lg:text-4xl text-xl ">
          Добиться успеха на маркетплейсах ЛЕГКО!
        </p>
      </div>
    </div>
  );
};

export default NavbarP1;
