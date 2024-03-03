import { cn } from "@/lib/cn";
import React from "react";

const boxes = [
  {
    title: "Как мы будем взаимодействовать в процессе работы? ",
    text: "Мы закрепим за вами персонального менеджера, 	который будет вести ваш проект и будет находиться  на связи.",
    className: " rounded-tl-[4.5rem] border-r-2 border-b-2 text-right ",
    textCss: "",
  },
  {
    title:
      "Я только планирую выйти на маркетплейсы, чем вы можете быть мне полезны?",
    text: "Проведем анализ выбранного вами товара и  составим четкий план развития бизнеса для уверенного и успешного старта.",
    className: " rounded-tr-[4.5rem] border-l-2 border-b-2 text-left ",
    textCss: "",
  },
  {
    title: "Сколько стоят ваши услуги?",
    text: "Стоимость услуг зависит от требуемого спектра услуг 	и количества SKU. Оставьте заявку, мы свяжемся и посчитаем 	стоимость услуг индивидуально.",
    className: " rounded-bl-[4.5rem] border-r-2 border-t-2 text-right pt-4 ",
    textCss: "",
  },
  {
    title: "Почему я должен выбрать именно вас? ",
    text: "В нашей команде профессионалы высокого уровня, которые знают все об алгоритмах маркетплейсов.  ",
    className: " rounded-br-[4.5rem] border-l-2 border-t-2 text-left pt-4",
    textCss: " ",
  },
];

const GridFour = (props) => {
  return (
    <div
      className={cn(
        "ml-6 grid w-[80%] min-w-[750px] grid-cols-2 grid-rows-2 rounded-[4.5rem] border-4 border-white  bg-gradient-to-tr from-gray-400 from-[1%] to-indigo-800 to-[99%] grayscale-[0.3]",
        props.className,
      )}
    >
      {boxes.map((box, i) => (
        <article
          key={i}
          className={"h-[40vh] space-y-3  bg-noise p-7 lg:p-14" + box.className}
        >
          <h3 className="text-lg font-semibold text-white lg:text-3xl">
            {box.title}
          </h3>
          <p className="text-md text-white lg:text-xl">{box.text}</p>
        </article>
      ))}
    </div>
  );
};

export default GridFour;
