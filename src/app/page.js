import HomePage from "@/components/Home";
import BackgroudGradient from "@/components/backgroudGradient";
import GridFour from "@/components/page 5/grid";

export const metadata = { title: "Добиться успеха на маркетплейсах ЛЕГКО!" };

export default function Home() {
  return (
    // <div className="flex h-screen items-center justify-center">
    //   <GridFour></GridFour>
    // </div>

    // <HomePage></HomePage>
    <div className=" bg-gradient-to-r from-pink-700 to-fuchsia-700">
      <BackgroudGradient />
    </div>
  );
}
