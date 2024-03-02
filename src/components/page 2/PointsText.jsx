"use client";
import React, { useEffect, useRef, useState } from "react";
import Bullet from "../svgs/bullet";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  gsap.registerPlugin(ScrollTrigger);
  const points = useRef();
  useGSAP(() => {
    let boxes = gsap.utils.toArray(points.current.children);
    console.log(boxes);

    gsap.fromTo(
      boxes,
      {
        x: "-200%",
        scrollTrigger: {
          trigger: boxes,
          start: "top top",
          scrub: false,
          end: "+=500",
          markers: false,
        },
        duration: 0.3,
        stagger: { amount: 1 },
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: boxes,
          start: "top-=100 center",
          scrub: false,
          end: "bottom center",
          markers: false,
        },
        duration: 0.3,
        stagger: { amount: 0.4 },
      },
    );
  });
  return (
    <div {...props}>
      <div className="flex w-full lg:items-center">
        <ul
          className="flex w-full flex-col gap-4 lg:mr-20 lg:gap-5 "
          ref={points}
        >
          {descList.map((e) => {
            return (
              <li key={e.id} className="w-full">
                <p className="flex flex-row-reverse lg:w-[100%] lg:flex-row ">
                  <span className="flex-1 text-wrap tracking-[0.06rem]  lg:text-2xl">
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
