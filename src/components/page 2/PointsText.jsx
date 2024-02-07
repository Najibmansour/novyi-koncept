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
      <div className="flex lg:items-center">
        <ul className="lg:mr-20 lg:pl-10 pl-4 lg:gap-5 gap-4 flex flex-col w-[79%]">
          {descList.map((e) => {
            return (
              <li key={e.id} className="">
                <p className="flex flex-row items-center lg:w-[100%] w-[90%] mx-auto">
                  <Bullet />
                  <span className="pl-4 lg:text-2xl text-wrap tracking-[0.06rem] w-96">
                    {e.title}
                  </span>
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
