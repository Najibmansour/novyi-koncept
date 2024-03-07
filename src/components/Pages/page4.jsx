import Circles from "../page 4/Circles";

export default function CirclesPage() {
  return (
    <div className=" flex w-screen flex-col items-center gap-5 lg:h-[50svh] lg:justify-evenly lg:gap-16 lg:px-12">
      <h2 className="text-center text-2xl font-bold tracking-wide text-white lg:text-5xl">
        Стратегический подход
      </h2>
      <Circles />
    </div>
  );
}
