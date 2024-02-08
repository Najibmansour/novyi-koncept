import React from "react";
import Logo from "../svgs/logo/Logo";

const NavbarP1 = () => {
  return (
    <nav className="navbar  lg:mb-10 px-10 lg:pt-16 pt-8 lg:pl-28 items-center ">
      <div className="w-full lg:flex grid place-items-stretch ">
        <Logo className="lg:w-20 w-14  " />
        <p className="text-white font-bold w-[100%] pt-4 lg:pt-0 text-center lg:text-4xl text-xl ">
          Добиться успеха на маркетплейсах ЛЕГКО!
        </p>
      </div>
    </nav>
  );
};

export default NavbarP1;
