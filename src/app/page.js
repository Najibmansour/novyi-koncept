// "use client";
import Page1 from "@/components/Pages/page1";
import Page2 from "@/components/Pages/page2";
import Page3 from "@/components/Pages/page3";
import TableElement from "@/components/page 3/tableElement";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}
