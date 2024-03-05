import React from "react";
import Logo from "../svgs/logo/Logo";
import { cn } from "@/lib/cn";

const NavbarP1 = (props) => {
  //Achieving success on marketplaces is EASY!

  return (
    <nav
      className={cn(
        "flex flex-row  items-center justify-between rounded-xl border-2 border-white px-8 lg:h-[13%] lg:w-full lg:rounded-3xl",
        props.className,
      )}
    >
      <div className="flex flex-row gap-x-2 lg:gap-x-3">
        <Logo className="w-10 lg:w-14" />
        <h2 className="w-[10%] text-xs font-semibold text-white lg:text-2xl ">
          Новый Концепт
        </h2>
      </div>
      <div className="flex w-[50%] flex-row items-center justify-end text-2xl text-white lg:w-[50%]">
        <h1 className="text-xs lg:text-2xl ">
          Добиться успеха на маркетплейсах ЛЕГКО !
        </h1>
      </div>
    </nav>
  );
};

export default NavbarP1;
