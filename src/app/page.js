// "use client";
import Footer from "@/components/Footer";
import Page1 from "@/components/Pages/page1";
import Page2 from "@/components/Pages/page2";
import Page3 from "@/components/Pages/page3";
import Page4 from "@/components/Pages/page4";
import Page5 from "@/components/Pages/page5";

export default function Home() {
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
