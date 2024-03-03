"use client";
import React, { useRef } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Logo from "../svgs/logo/Logo";
import NavbarP1 from "./NavbarP1";
import DownArrow from "../svgs/downArrow";
import Vk_Logo from "../svgs/logo/Vk_Logo";
import InstagramLogo2 from "../svgs/logo/Instagram2";
import Link from "next/link";

const HeroP1 = () => {
  const logoRef = useRef();
  if (typeof window !== "undefined") {
    const myText = new SplitType(".targetText", { types: "words" });

    console.log(myText.words);

    useGSAP(() => {
      let mm = gsap.matchMedia();
      let breakPoint = 800;
      mm.add(
        {
          // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          let { isDesktop, isMobile, reduceMotion } = context.conditions;

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
          gsap.fromTo(
            logoRef.current,
            {
              opacity: 0,
              duration: 1.3,
              ease: "power2.in",
            },
            {
              opacity: 0.4,
              duration: 1.2,
              ease: "power2.in",
            },
          );
        },
      );
    });
  }

  return (
    <section className="flex h-screen w-screen flex-col items-center lg:flex-row lg:justify-center ">
      <NavbarP1 className="m-4 px-2 py-2 lg:hidden" />

      <div className="relative mb-0 flex h-[85svh] w-[90%] flex-row items-center justify-center overflow-clip rounded-[2rem] bg-opacity-50 bg-gradient-to-tr from-gray-400 from-[1%] to-indigo-800 to-[99%] grayscale-[0.4] filter lg:mb-0 lg:h-[90%] lg:w-[90vw] lg:rounded-[4rem]  lg:shadow-3xl">
        <div className="h-[100%] w-[100%] lg:h-[90%] lg:w-[90%] ">
          <NavbarP1 className="hidden lg:flex" />
          <div className="grid h-[90%] w-full grid-cols-1 justify-between space-y-5 lg:h-[80%]  lg:grid-cols-2  ">
            <div className="flex w-full items-center justify-center lg:blur-[8px]">
              <Logo
                forwardRef={logoRef}
                className="flex p-10 opacity-0 filter lg:p-10"
              />
              {/* <NavbarP1 className="m-4 px-2 py-2 lg:hidden" /> */}
            </div>
            <div className="flex w-full flex-col items-center justify-center    text-white">
              <div className="logoFont flex w-[95%] flex-col items-start space-y-4  tracking-wider lg:items-start">
                <h2 className="targetText w-full px-4 text-3xl  tracking-wider  lg:text-4xl">
                  Мы, компания Новый Концепт, поможем вам пройти путь от идеи
                  магазина до запуска и первых продаж.
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 flex w-[90%] flex-col items-center justify-center space-y-1 text-lg text-white">
            <div className="hidden animate-bounce flex-col items-center lg:flex">
              <p className="text-sm lg:text-lg">Почему выбирают нас</p>
              <DownArrow className="w-6 lg:w-7" />
            </div>
            <div className="absolute right-0 hidden flex-row gap-3 lg:flex">
              <Link href="/" aria-label="open instagram page of novyi">
                <InstagramLogo2 className="h-12 w-12" />
              </Link>
              <Link href="/" aria-label="open VK page of novyi">
                <Vk_Logo className="h-12 w-12" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -z-50 h-full w-full blur-[2px] filter lg:bg-noise"></div>
      </div>
    </section>
  );
};

export default HeroP1;
