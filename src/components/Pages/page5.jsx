// "use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function page5() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 800px)", () => {
      gsap.to("#BigBox", {
        x: "-110%",
        duration: 1,
        ease: "power2.inOut",

        scrollTrigger: {
          trigger: "#BigBox",
          scrub: false,
          start: "center-=90 center",
          end: "center center",
          markers: false,
          toggleActions: "play none reverse none",
        },
      });
    });
  });

  return (
    <div className="mt-10 flex h-screen flex-col items-center gap-8 px-4 lg:gap-8 lg:px-12 ">
      <h2 className="text-center text-3xl font-bold text-primary lg:text-4xl">
        Часто задаваемые вопросы
      </h2>
      <div className=" scrollHorizontal h-full w-screen" id="BigBox">
        <div className="mx-5 grid h-[90%] min-w-[750px] grid-cols-2  lg:mx-auto lg:max-w-[70%] ">
          <Box
            pos="top-left"
            title="Почему я должен выбрать именно вас?"
            text=" В нашей команде профессионалы высокого уровня, которые знают все об алгоритмах маркетплейсов"
          />
          <Box
            pos="top-right"
            title="Я только планирую выйти на маркетплейсы, чем вы можете быть мне полезны?"
            text="Проведем анализ выбранного вами товара и составим четкий план развития бизнеса для уверенного и успешного старта"
          />
          <Box
            pos="bottom-left"
            title="Сколько стоят ваши услуги?"
            text="Стоимость услуг зависит от требуемого спектра услуг и количества SKU. Оставьте заявку, мы свяжемся и посчитаем стоимость услуг индивидуально"
          />
          <Box
            pos="bottom-right"
            title="Как мы будем взаимодействовать в процессе работы?"
            text="Мы закрепим за вами персонального менеджера,  который будет вести ваш проект и будет находиться  на связи"
          />
        </div>
      </div>
    </div>
  );
}

function Box({ pos, title, text }) {
  let cornerStyle = "";
  let borderStyle = "";
  let align = "text-left";
  if (pos === "top-left" || pos === "bottom-left") {
    align = "text-right";
  }
  switch (pos) {
    case "top-left":
      cornerStyle = "rounded-tl-[4.5rem]";
      borderStyle = "border-r-0";
      break;
    case "top-right":
      cornerStyle = "rounded-tr-[4.5rem] ";
      break;
    case "bottom-left":
      cornerStyle = "rounded-bl-[4.5rem]";
      borderStyle = "border-t-0 border-r-0";
      break;
    case "bottom-right":
      cornerStyle = "rounded-br-[4.5rem]";
      borderStyle = "border-t-0";
      break;
    default:
      break;
  }
  return (
    <div
      className={
        borderStyle +
        " flex flex-col items-center justify-center gap-4 border-4 border-primary lg:h-[400px] " +
        align +
        " " +
        cornerStyle
      }
    >
      <h3 className="w-[80%] font-semibold text-primary lg:w-[70%] lg:text-2xl">
        {title}
      </h3>
      <p className="w-[80%] lg:w-[70%] lg:text-2xl">{text}</p>
    </div>
  );
}
