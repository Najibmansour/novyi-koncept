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
        }
      );
    });
  }

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 pt-0 lg:gap-24 gap-4 ">
      <AvatarP1 />
      <div className="lg:flex items-center ">
        <div className="w-80 h-48 flex justify-center items-center ">
          <p
            // ref={myText}
            id="target"
            className="targetText font-normal text-white lg:w-[100%] w-[80%] text-[1.4rem] leading-[normal] tracking-wider text-center lg:text-4xl  lg:text-left"
          >
            Мы, компания , поможем вам пройти путь от идеи магазина до запуска и
            первых продаж
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroP1;
