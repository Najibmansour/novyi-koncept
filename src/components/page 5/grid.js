import { cn } from "@/lib/cn";
import React from "react";

const boxes = [
  {
    title: "Как мы будем взаимодействовать в процессе работы? ",
    text: "Мы закрепим за вами персонального менеджера, 	который будет вести ваш проект и будет находиться  на связи.",
    className:
      "lg:rounded-tl-[4.5rem] lg:border-r-2 lg:border-b-2 lg:text-right border-t-0",
    textCss: "",
  },
  {
    title:
      "Я только планирую выйти на маркетплейсы, чем вы можете быть мне полезны?",
    text: "Проведем анализ выбранного вами товара и  составим четкий план развития бизнеса для уверенного и успешного старта.",
    className:
      "lg:rounded-tr-[4.5rem] lg:border-l-2 lg:border-b-2 lg:text-left  ",
    textCss: "",
  },
  {
    title: "Сколько стоят ваши услуги?",
    text: "Стоимость услуг зависит от требуемого спектра услуг 	и количества SKU. Оставьте заявку, мы свяжемся и посчитаем 	стоимость услуг индивидуально.",
    className:
      "lg:rounded-bl-[4.5rem] lg:border-r-2 lg:border-t-2 lg:text-right pt-4 ",
    textCss: "",
  },
  {
    title: "Почему я должен выбрать именно вас? ",
    text: "В нашей команде профессионалы высокого уровня, которые знают все об алгоритмах маркетплейсов.  ",
    className:
      "lg:rounded-br-[4.5rem] lg:border-l-2 lg:border-t-2 lg:text-left pt-4 border-b-0",
    textCss: " ",
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
            "h-[20vh] space-y-2 border-y-2 bg-noise p-4 lg:h-[40vh]  lg:space-y-1 lg:p-14",
            box.className,
          )}
        >
          <h3 className=" text-md font-semibold leading-4 tracking-wide text-white lg:text-3xl ">
            {box.title}
          </h3>
          <p className=" text-sm leading-4 text-white lg:text-xl ">
            {box.text}
          </p>
        </article>
      ))}
    </div>
  );
};

export default GridFour;
