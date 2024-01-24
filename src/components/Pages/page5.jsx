export default function page5() {
  return (
    <div className="lg:p-12 p-4 mt-10 flex flex-col h-screen items-center lg:gap-16 gap-8 ">
      <h2 className="lg:text-4xl text-3xl text-primary font-bold text-center">
        Часто задаваемые вопросы
      </h2>
      <div className="w-screen overflow-x-auto overflow-y-hidden scrollHorizontal h-full ">
        <div className="grid grid-cols-2 min-w-[750px] h-[90%] lg:max-w-[70%]  mx-8 lg:mx-auto ">
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
      cornerStyle = "rounded-tr-[4.5rem]";
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
        " lg:h-[400px] flex flex-col justify-center items-center gap-4 border-primary border-4 " +
        align +
        " " +
        cornerStyle
      }
    >
      <h3 className="text-primary font-semibold lg:w-[70%] w-[80%] lg:text-2xl">
        {title}
      </h3>
      <p className="lg:w-[70%] w-[80%] lg:text-2xl">{text}</p>
    </div>
  );
}
