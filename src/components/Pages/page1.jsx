import React from "react";
import NavbarP1 from "../page 1/NavbarP1";
import HeroP1 from "../page 1/HeroP1";
import FooterP1 from "../page 1/FooterP1";

const Page1 = () => {
  return (
    <div className="flex h-[100svh] w-screen flex-col items-center bg-primary">
      <NavbarP1 />
      <HeroP1 />
      <FooterP1 />
    </div>
  );
};

export default Page1;
