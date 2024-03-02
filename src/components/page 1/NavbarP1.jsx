import React from "react";
import Logo from "../svgs/logo/Logo";

const NavbarP1 = () => {
  //Achieving success on marketplaces is EASY!

  return (
    <nav className="hidden h-[13%] w-full items-center justify-between rounded-3xl border-2 border-white px-10 lg:flex lg:flex-row">
      <div>
        <Logo className="w-14" />
      </div>
      <div className="flex w-[50%] flex-row items-center justify-end text-2xl text-white">
        <h1 className="text-xl lg:text-xl ">
          Добиться успеха на маркетплейсах ЛЕГКО !
        </h1>
      </div>
    </nav>
  );
};

export default NavbarP1;
