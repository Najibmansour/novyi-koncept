import { cn } from "@/lib/cn";
import React from "react";

const boxes = [
  {
    title: "Как мы будем взаимодействовать в процессе работы? ",
    text: "Мы закрепим за вами персонального менеджера, 	который будет вести ваш проект и будет находиться  на связи.",
    className: "border-t-0 lg:border-r-2 lg:text-right",
  },
  {
    title:
      "Я только планирую выйти на маркетплейсы, чем вы можете быть мне полезны?",
    text: "Проведем анализ выбранного вами товара и  составим четкий план развития бизнеса для уверенного и успешного старта.",
    className: "border-t-0 lg:border-l-2 lg:text-left",
  },
  {
    title: "Сколько стоят ваши услуги?",
    text: "Стоимость услуг зависит от требуемого спектра услуг 	и количества SKU. Оставьте заявку, мы свяжемся и посчитаем 	стоимость услуг индивидуально.",
    className: "border-b-0 lg:border-r-2 lg:text-right",
  },
  {
    title: "Почему я должен выбрать именно вас? ",
    text: "В нашей команде профессионалы высокого уровня, которые знают все об алгоритмах маркетплейсов.  ",
    className: "border-b-0 lg:border-l-2 lg:text-left",
  },
];

const GridFour = (props) => {
  return (
    <div
      className={cn(
        "mx-4 grid w-auto rounded-3xl border-4 border-white bg-gradient-to-tr from-gray-400 from-[1%] to-indigo-800 to-[99%] grayscale-[0.3] lg:w-[80%] lg:grid-cols-2 lg:grid-rows-2 lg:rounded-[4.5rem] lg:p-0",
        props.className,
      )}
    >
      {boxes.map((box, i) => (
        <article
          key={i}
          className={cn(
            "border-y-2 p-4 text-center lg:px-[2rem] lg:py-[3rem]",
            box.className,
          )}
        >
          <h3 className="text-md  font-semibold leading-4 tracking-wide text-white lg:text-3xl ">
            {box.title}
          </h3>
          <p className="text-sm leading-4 text-white lg:text-2xl ">
            {box.text}
          </p>
        </article>
      ))}
    </div>
  );
};

export default GridFour;
