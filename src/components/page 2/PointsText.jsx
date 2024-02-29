"use client";
import React, { useEffect, useState } from "react";
import Bullet from "../svgs/bullet";

const descList = [
  {
    id: 0,
    title: "Работаем c селлерами по всей России",
  },
  {
    id: 1,
    title: "Проведем аудит",
  },
  {
    id: 2,
    title: "Произведём расчеты",
  },
  {
    id: 3,
    title: "Быстро запускаем продажи",
  },
  {
    id: 4,
    title: "Настроим эффективное продвижение",
  },
];

const PointsText = (props) => {
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768 ? true : false);
  }, []);
  return (
    <div {...props}>
      <div className="flex w-full lg:items-center">
        <ul className="flex w-[100%] flex-col gap-4 lg:mr-20 lg:gap-5 lg:pl-0">
          {descList.map((e) => {
            return (
              <li key={e.id} className="w-full">
                <p className=" flex flex-row-reverse lg:w-[100%] lg:flex-row ">
                  <span className="flex-1 text-wrap tracking-[0.06rem] lg:pl-0 lg:text-2xl">
                    {e.title}
                  </span>
                  <Bullet className="mr-4 w-2 lg:w-3" />
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PointsText;
