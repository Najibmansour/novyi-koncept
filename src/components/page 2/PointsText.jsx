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

const PointsText = () => {
  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768 ? true : false);
  }, []);
  return (
    <div className=" flex items-center">
      <ul className="lg:mr-20 pl-10">
        {descList.map((e) => {
          return (
            <li key={e.id} className="gap-10">
              <p className="flex flex-row">
                <Bullet />
                <span className="pl-4 lg:text-2xl font-[530] my-4  tracking-[0.06rem] w-96">
                  {e.title}
                </span>
              </p>
              <p className="pl-10">{e.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PointsText;
