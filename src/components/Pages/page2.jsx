import React from "react";
import Laptop from "../svgs/laptop";
import Bullet from "../svgs/bullet";

const descList = [
  {
    id: 0,
    title: "Разблокируйте потенциал",
    desc: "Комплексный анализ онлайн-присутствия",
  },
  {
    id: 1,
    title: "Глубокий анализ",
    desc: "Выявление сильных и слабых сторон, a также скрытых возможностей",
  },
  {
    id: 2,
    title: "Экспертные исследования",
    desc: "Оптимизация вашего онлайн-присутствия c ценным анализом",
  },
  {
    id: 3,
    title: "Уверенная навигация",
    desc: " Основана на трендах рынка, бенчмарках конкурентов и стратегической карте",
  },
  {
    id: 4,
    title: "Поднимите свой бренд",
    desc: "Оставайтесь впереди в постоянно меняющемся цифровом мире c нашим анализом онлайн-присутствия",
  },
];

const Page2 = () => {
  return (
    <div className=" flex justify-center items-center w-screen h-screen  ">
      <div className=" grid lg:grid-cols-2 grid-cols-1 ">
        <div className=" lg:order-last">
          <Laptop />
        </div>
        <div className=" flex items-center">
          <ul dir="rtl" className="lg:mr-20">
            {descList.map((e) => {
              return (
                <li key={e.id} className="">
                  <p className="flex flex-row">
                    <Bullet />
                    <span className="mr-3 font-bold lg:text-xl text-primary tracking-[0.04rem]">
                      {e.title}
                    </span>
                  </p>
                  <p className="mr-6">{e.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    // <div className="w-screen h-screen bg-white flex flex-row justify-center items-center ">
    //   <div className="grid gap-5 lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 w-[80%]">
    //     <ul
    //       className="list-disc text-right list-outside text-primary "
    //       dir="rtl"
    //     >
    //
    //     </ul>
    //     <Laptop />
    //   </div>
    // </div>
  );
};

export default Page2;
