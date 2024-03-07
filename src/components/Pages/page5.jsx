// "use client";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";
import GridFour from "../page 5/grid";

export default function Table() {
  // gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   let mm = gsap.matchMedia();

  //   mm.add("(max-width: 800px)", () => {
  //     gsap.to("#BigBox", {
  //       x: "-110%",
  //       duration: 1,
  //       ease: "power2.inOut",

  //       scrollTrigger: {
  //         trigger: "#BigBox",
  //         scrub: false,
  //         start: "center-=90 center",
  //         end: "center center",
  //         markers: false,
  //         toggleActions: "play none reverse none",
  //       },
  //     });
  //   });
  // });

  return (
    <div className="flex h-screen w-screen flex-col items-center gap-5 lg:justify-end  lg:gap-0 ">
      <h2 className="w-[90%] text-center text-2xl font-bold text-white lg:text-5xl">
        Часто задаваемые вопросы
      </h2>
      <article
        className=" h-full w-screen flex-col items-center justify-center lg:flex "
        id="BigBox"
      >
        <GridFour id="BigBox" />
      </article>
    </div>
  );
}
