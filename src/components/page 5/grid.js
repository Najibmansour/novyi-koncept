import React from "react";

const boxes = [
  {
    title: "Как мы будем взаимодействовать в процессе работы?",
    text: "Мы закрепим за вами персонального менеджера,  который будет вести ваш проект и будет находиться  на связи",
    className: " rounded-tl-[4.5rem] text-right ",
    textCss: "",
  },
  {
    title: "Сколько стоят ваши услуги?",
    text: "Стоимость услуг зависит от требуемого спектра услуг и количества SKU. Оставьте заявку, мы свяжемся и посчитаем стоимость услуг индивидуально",
    className: " rounded-tr-[4.5rem] text-left ",
    textCss: "",
  },
  {
    title:
      "Я только планирую выйти на маркетплейсы, чем вы можете быть мне полезны?",
    text: "Проведем анализ выбранного вами товара и составим четкий план развития бизнеса для уверенного и успешного старта",
    className: " rounded-bl-[4.5rem] text-right pt-4 ",
    textCss: "",
  },
  {
    title: "Почему я должен выбрать именно вас?",
    text: " В нашей команде профессионалы высокого уровня, которые знают все об алгоритмах маркетплейсов",
    className: " rounded-br-[4.5rem] text-left pt-4",
    textCss: " ",
  },
];

const GridFour = () => {
  return (
    <div className="ml-6 grid w-[90%] min-w-[750px] grid-cols-2 grid-rows-2 gap-[4px] rounded-[4.5rem] border-4 border-primary bg-primary ">
      {boxes.map((box, i) => (
        <article
          key={i}
          className={"h-[40vh] space-y-3 bg-white p-7 lg:p-14" + box.className}
        >
          <h3 className="text-lg font-semibold text-primary lg:text-2xl">
            {box.title}
          </h3>
          <p className="text-md lg:text-lg">{box.text}</p>
        </article>
      ))}
    </div>
  );
};

export default GridFour;
