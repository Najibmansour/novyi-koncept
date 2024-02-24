"use client";
import Footer from "@/components/Footer";
import Page2 from "@/components/Pages/page2";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import BackgroudGradient from "./backgroudGradient";
import HeroP1 from "./page 1/HeroP1";
import Reviews from "./Pages/reviews";
import Table from "@/components/Pages/page5";
import CirclesPage from "@/components/Pages/page4";

export const metadata = { title: "Achieving success on marketplaces is EASY!" };

export default function HomePage() {
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
    // <div className="overflow-hidden">
    //   <Page1 />
    //   <Page2 />
    //   <Page3 />
    //   <Page4 />
    //   <Page5 />
    //   <Footer />
    // </div>
    <>
      <div className="absolute -z-50 bg-gradient-to-r from-pink-700 to-fuchsia-700">
        <BackgroudGradient />
      </div>
      <section className="">
        <HeroP1 />
      </section>
      <section>
        <Page2 />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <Table />
      </section>
      <section>
        <CirclesPage />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
