import React from "react";
import ChatBuble from "../page 4/ChatBuble";

const Page4 = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-center text-primary w-[60%] text-xl lg:text-4xl">
          Как я могу улучшить стратегии моего бизнесав конкурентной среде?
        </h1>
        <div className="">
          <p className="absolute lg:p-5 p-3 lg:w-[22rem] w-72 lg:text-lg leading-5  ">
            Наши рекомендации, ориентированные на ваш сектор, и консультации,
            актуализированные под ваш бизнес, помогут вам достичь
            стратегического успеха. Давайте обсудим ваши уникальные задачи и
            цели
          </p>
          <ChatBuble />
        </div>
      </div>
    </div>
  );
};

export default Page4;
