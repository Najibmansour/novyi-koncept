"use client";
import React, { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [tel, setTel] = useState();
  const [desc, setDesc] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { name: name, mail: mail, tel: tel, desc: desc },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section class="bg-white w-screen h-screen overflow-scroll">
      <div class="flex flex-col justify-center items-center  lg:mt-32 mt-20 lg:gap-10 gap-5">
        <h2 class=" lg:text-5xl text-2xl tracking-tight font-extrabold text-center text-secondary  ">
          Оставьте заявку
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          class=" grid lg:grid-cols-2 grid-cols-1 grid-rows-1 lg:gap-10 gap-8 lg:w-[70vw] w-[80vw]"
        >
          <div className="w-[100%]  flex flex-wrap lg:gap-10 gap-8 ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="email"
              id="name"
              class="lg:py-4 lg:px-8 px-6 py-3 focus:border-secondary placeholder:opacity-80 border-opacity-80 min-w-full lg:text-xl text-md text-secondary lg:border-[5px] border-4 border-secondary   rounded-2xl shadow-sm  "
              placeholder="Ваше имя"
              required
            />

            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="text"
              id="mail"
              class=" lg:py-4 lg:px-8 px-6 py-3 focus:border-secondary placeholder:opacity-80 border-opacity-80  min-w-full  lg:text-xl text-md text-secondary rounded-2xl lg:border-[5px] border-4 border-secondary shadow-sm  "
              placeholder="Email"
              required
            />
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              type="text"
              id="phone"
              class=" lg:py-4 lg:px-8 px-6 py-3 focus:border-secondary placeholder:opacity-80 border-opacity-80  min-w-full  lg:text-xl text-md text-secondary rounded-2xl lg:border-[5px] border-4 border-secondary shadow-sm  "
              placeholder="Телефон (+7)"
              required
            />
          </div>

          <div className="lg:row-span-1 w-[100%] flex flex-col ">
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="comment"
              rows="6"
              class="lg:py-4 lg:px-8 px-6 py-3 focus:border-secondary text-secondary placeholder:opacity-80 border-opacity-80  lg:text-xl text-md rounded-2xl shadow-sm lg:border-[5px] border-4 border-secondary  "
              placeholder="Комментарии"
            />
            <div className="flex  flex-row lg:justify-end justify-center items-center lg:mr-10 mt-8">
              <button
                type="submit"
                class="py-3 px-5 lg:text-xl text-md font-medium text-center text-white  rounded-2xl bg-primary-700 sm:w-fit bg-secondary "
              >
                Отправить
              </button>
            </div>
          </div>
        </form>
        <h3 className="lg:text-xl text-md lg:w-[30vw] w-[90vw] text-center">
          Я разрешаю обработку персональных данных и соглашаюсь c политикой
          конфедициальности
        </h3>
      </div>
    </section>
  );
};

export default Contact;
