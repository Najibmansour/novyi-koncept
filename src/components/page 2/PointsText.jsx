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
        <ul className="flex w-[79%] flex-col gap-4 pl-4 lg:mr-20 lg:gap-5 lg:pl-10">
          {descList.map((e) => {
            return (
              <li key={e.id} className="">
                <p className="mx-auto flex w-[90%] flex-row items-center lg:w-[100%]">
                  <Bullet />
                  <span className="w-96 text-wrap pl-4 tracking-[0.06rem] lg:text-2xl">
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
