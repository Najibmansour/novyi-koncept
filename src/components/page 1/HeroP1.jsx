"use client";
import React, { useRef } from "react";
import AvatarP1 from "./AvatarP1";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Logo from "../svgs/logo/Logo";
import NavbarP1 from "./NavbarP1";
import { cn } from "@/lib/cn";
// import { SplitText } from "@cyriacbr/react-split-text";

const HeroP1 = () => {
  if (typeof window !== "undefined") {
    const myText = new SplitType(".targetText", { types: "words" });

    console.log(myText);

    useGSAP(() => {
      gsap.fromTo(
        myText.words,
        {
          y: "100%",
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          stagger: { amount: 1.4 },
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.in",
          stagger: { amount: 1.4 },
        },
      );
    });
  }

  return (
    // <div className="grid grid-cols-1 grid-rows-1 gap-4 pt-0 lg:grid-cols-2 lg:gap-24 ">
    //   <AvatarP1 />
    //   <div className="items-center lg:flex ">
    //     <div className="flex h-48 w-80 items-center justify-center ">
    //       <h2
    //         // ref={myText}

    //         id="target"
    //         className="targetText w-[80%] text-center text-[1.4rem] font-normal leading-[normal] tracking-wider text-white lg:w-[100%] lg:text-left  lg:text-4xl"
    //       >
    //         Мы, компания , поможем вам пройти путь от идеи магазина до запуска и
    //         первых продаж
    //       </h2>
    //     </div>
    //   </div>
    // </div>
    <section className="flex h-screen w-screen flex-row items-center justify-center ">
      <div className="relative  mb-10 flex h-[95svh] w-[80%] flex-row items-center justify-center overflow-clip rounded-[3rem] bg-opacity-50 bg-gradient-to-tr from-gray-100 from-[1%] to-indigo-800 to-[99%] shadow-3xl grayscale-[0.4] filter lg:mb-0 lg:h-[90%] lg:w-[90%] lg:rounded-[4rem]">
        <div className="h-[90%] w-[90%] ">
          <NavbarP1 />
          <div className="grid h-[75%] w-full grid-cols-2  ">
            <div className="flex w-full items-center justify-center">
              <Logo className="p-10 opacity-40  filter" />
            </div>
            <div className="flex  w-full flex-col items-center justify-center  text-white">
              <div className="logoFont w-[90%] space-y-4 tracking-wider">
                <h1 className="text-5xl">
                  Добиться успеха на маркетплейсах ЛЕГКО !
                </h1>
                <h2 className="w-[70%] text-xl ">
                  Мы, компания Новый Концепт, поможем вам пройти путь от идеи
                  магазина до запуска и первых продаж
                </h2>
              </div>
            </div>
          </div>

          <div className="flex h-[15%] w-full flex-row items-center justify-center text-lg text-white">
            Почему выбирают нас
          </div>
        </div>
        <div className="bg-noise absolute -z-50 h-full  w-full blur-[2px] filter"></div>
      </div>
    </section>
  );
};

export default HeroP1;
