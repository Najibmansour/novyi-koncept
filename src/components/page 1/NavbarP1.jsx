import React from "react";
import Logo from "../svgs/logo/Logo";

const NavbarP1 = () => {
  //Achieving success on marketplaces is EASY!

  return (
    <div className="navbar  items-center px-10 pt-8 lg:mb-10 lg:pl-28 lg:pt-16 ">
      <div className="grid w-full place-items-stretch lg:flex ">
        <Logo className="w-14 lg:w-20  " />
        <h1 className="w-[100%] pt-4 text-center text-xl font-bold text-white lg:pt-0 lg:text-4xl ">
          Добиться успеха на маркетплейсах ЛЕГКО!
        </h1>
      </div>
    </div>
  );
};

export default NavbarP1;
