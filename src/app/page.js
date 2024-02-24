// "use client";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import Page2 from "@/components/Pages/page2";
import Page3 from "@/components/Pages/page3";
import Page4 from "@/components/Pages/page4";
import Page5 from "@/components/Pages/page5";
import Reviews from "@/components/Pages/reviews";
import BackgroudGradient from "@/components/backgroudGradient";
import HeroP1 from "@/components/page 1/HeroP1";
import GridFour from "@/components/page 5/grid";

export const metadata = { title: "Добиться успеха на маркетплейсах ЛЕГКО!" };

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <HomePage />
    </div>
  );
}
