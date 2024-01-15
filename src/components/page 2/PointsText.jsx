"use client";
import React, { useEffect, useState } from "react";
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

const PointsText = () => {
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768 ? true : false);
  }, []);
  return (
    <div className=" flex items-center">
      <ul dir={isMobile ? "ltr" : "rtl"} className="lg:mr-20 pl-10">
        {descList.map((e) => {
          return (
            <li key={e.id} className="">
              <p className="flex flex-row">
                <Bullet />
                <span className="lg:mr-3 ml-3 font-bold lg:text-xl text-primary tracking-[0.04rem]">
                  {e.title}
                </span>
              </p>
              <p className="lg:mr-6 ml-6 lg:pl-64 pr-10 lg:pr-0">{e.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PointsText;
