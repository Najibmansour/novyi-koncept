"use client";
import Footer from "@/components/Footer";
import Page1 from "@/components/Pages/page1";
import Page2 from "@/components/Pages/page2";
import Page3 from "@/components/Pages/page3";
import Page4 from "@/components/Pages/page4";
import Page5 from "@/components/Pages/page5";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });

  return (
    <div className="overflow-hidden">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </div>
  );
}
