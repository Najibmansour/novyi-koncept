import React from "react";
import Logo from "../svgs/logo/Logo";

const NavbarP1 = () => {
  //Achieving success on marketplaces is EASY!

  return (
    // <div className="navbar  items-center px-10 pt-8 lg:mb-10 lg:pl-28 lg:pt-16 ">
    //   <div className="grid w-full place-items-stretch lg:flex ">
    //     <Logo className="w-14 lg:w-20  " />
    //     <h1 className="w-[100%] pt-4 text-center text-xl font-bold text-white lg:pt-0 lg:text-4xl ">
    //       Добиться успеха на маркетплейсах ЛЕГКО!
    //     </h1>
    //   </div>
    // </div>
    <nav className="hidden h-[13%] w-full items-center justify-between border border-2 border-white px-10 lg:flex lg:flex-row">
      <div>
        <Logo className="w-14" />
      </div>
      <div className="flex w-[40%] flex-row items-center justify-between text-2xl text-white">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
      </div>
    </nav>
  );
};

export default NavbarP1;
