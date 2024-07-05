import GridFour from "../page 5/grid";

export default function Table() {
  return (
    <div className="flex w-screen flex-col items-center gap-5 lg:min-h-screen lg:justify-center lg:gap-4 ">
      <h2 className="w-[90%] text-center text-2xl font-bold text-white lg:text-5xl">
        Часто задаваемые вопросы
      </h2>
      <article
        className=" h-auto w-screen flex-col items-center justify-center lg:flex "
        id="BigBox"
      >
        <GridFour id="BigBox" />
      </article>
    </div>
  );
}
