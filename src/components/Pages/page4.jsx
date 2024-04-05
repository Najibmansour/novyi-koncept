import Circles from "../page 4/Circles";

export default function CirclesPage() {
  return (
    <section className="flex h-auto w-screen flex-col items-center gap-9 lg:justify-evenly lg:px-12">
      <h2 className="text-center text-2xl font-bold tracking-wide text-white lg:text-5xl">
        Стратегический подход
      </h2>
      <Circles />
    </section>
  );
}
