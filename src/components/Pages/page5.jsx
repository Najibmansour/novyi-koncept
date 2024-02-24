"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import GridFour from "../page 5/grid";

export default function Table() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 800px)", () => {
      gsap.to("#BigBox", {
        x: "-110%",
        duration: 1,
        ease: "power2.inOut",

        scrollTrigger: {
          trigger: "#BigBox",
          scrub: false,
          start: "center-=90 center",
          end: "center center",
          markers: false,
          toggleActions: "play none reverse none",
        },
      });
    });
  });

  return (
    <div className="mt-10 flex h-screen flex-col items-center justify-center gap-5 px-4 lg:gap-8 lg:px-12 ">
      <h2 className="text-center text-4xl font-bold text-white lg:text-5xl">
        Часто задаваемые вопросы
      </h2>
      <article
        className=" scrollHorizontal h-full w-screen flex-col items-center lg:flex "
        id="BigBox"
      >
        <GridFour id="BigBox" />
      </article>
    </div>
  );
}

function Box({ pos, title, text }) {
  let cornerStyle = "";
  let borderStyle = "";
  let align = "text-left";
  if (pos === "top-left" || pos === "bottom-left") {
    align = "text-right";
  }
  switch (pos) {
    case "top-left":
      cornerStyle = "rounded-tl-[4.5rem]";
      borderStyle = "border-r-0";
      break;
    case "top-right":
      cornerStyle = "rounded-tr-[4.5rem] ";
      break;
    case "bottom-left":
      cornerStyle = "rounded-bl-[4.5rem]";
      borderStyle = "border-t-0 border-r-0";
      break;
    case "bottom-right":
      cornerStyle = "rounded-br-[4.5rem]";
      borderStyle = "border-t-0";
      break;
    default:
      break;
  }
  return (
    <div
      className={
        borderStyle +
        "flex flex-col items-center justify-center gap-4 border-4 border-white lg:h-[500px]" +
        align +
        " " +
        cornerStyle
      }
    >
      <h3 className="w-[100%] font-semibold text-white lg:w-[70%] lg:text-2xl">
        {title}
      </h3>
      <p className="w-[100%] lg:w-[70%] lg:text-2xl">{text}</p>
    </div>
  );
}
