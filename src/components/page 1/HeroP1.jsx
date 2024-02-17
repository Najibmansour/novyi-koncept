"use client";
import React, { useRef } from "react";
import AvatarP1 from "./AvatarP1";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
    <div className="grid grid-cols-1 grid-rows-1 gap-4 pt-0 lg:grid-cols-2 lg:gap-24 ">
      <AvatarP1 />
      <div className="items-center lg:flex ">
        <div className="flex h-48 w-80 items-center justify-center ">
          <h2
            // ref={myText}

            id="target"
            className="targetText  w-[80%] text-center text-[1.4rem] font-normal leading-[normal] tracking-wider text-white lg:w-[100%] lg:text-left  lg:text-4xl"
          >
            Мы, компания , поможем вам пройти путь от идеи магазина до запуска и
            первых продаж
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroP1;
