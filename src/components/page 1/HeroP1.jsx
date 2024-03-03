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
    <section className="flex h-screen w-screen flex-col items-center justify-end lg:flex-row lg:justify-center ">
      <div className="relative  mb-10 flex h-[80svh] w-[90%] flex-row items-center justify-center overflow-clip rounded-[3rem] bg-opacity-50 bg-gradient-to-tr from-gray-400 from-[1%] to-indigo-800 to-[99%] shadow-3xl grayscale-[0.4] filter lg:mb-0 lg:h-[90%] lg:w-[85%]  lg:rounded-[4rem]">
        <div className="h-[90%] w-[90%] ">
          <NavbarP1 />
          <div className="grid h-[75%] w-full grid-cols-1 space-y-5 lg:grid-cols-2  ">
            <div className="flex w-full items-center justify-center">
              <Logo
                forwardRef={logoRef}
                className="px-16 opacity-0 filter lg:block lg:p-10"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center  text-white">
              <div className="logoFont flex w-[90%] flex-col items-center space-y-4  tracking-wider lg:items-start">
                <h2 className="targetText w-[90%] text-lg tracking-wider lg:w-[100%] lg:text-4xl">
                  Мы, компания Новый Концепт, поможем вам пройти путь от идеи
                  магазина до запуска и первых продаж.
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5  flex w-[90%] flex-col items-center justify-center space-y-1 text-lg text-white">
            <div className="flex animate-bounce flex-col items-center">
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
        <div className="absolute -z-50 h-full w-full  bg-noise blur-[2px] filter"></div>
      </div>
    </section>
  );
};

export default HeroP1;
