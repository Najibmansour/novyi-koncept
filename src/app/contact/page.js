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
    // console.log(form.current);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { name: name, mail: mail, tel: tel, desc: desc },
        "YOUR_PUBLIC_KEY",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section className="h-screen w-screen overflow-scroll bg-white">
      <div className="mt-20 flex flex-col items-center  justify-center gap-5 lg:mt-32 lg:gap-10">
        <h2 className=" text-center text-2xl font-extrabold tracking-tight text-secondary lg:text-5xl  ">
          Оставьте заявку
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" grid w-[80vw] grid-cols-1 grid-rows-1 gap-8 lg:w-[70vw] lg:grid-cols-2 lg:gap-10"
        >
          <div className="flex  w-[100%] flex-wrap gap-8 lg:gap-10 ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="email"
              id="name"
              className="text-md min-w-full rounded-2xl border-4 border-secondary border-opacity-80 px-6 py-3 text-secondary shadow-sm placeholder:opacity-80 focus:border-secondary lg:border-[5px] lg:px-8   lg:py-4 lg:text-xl  "
              placeholder="Ваше имя"
              required
            />

            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="text"
              id="mail"
              className=" text-md min-w-full rounded-2xl border-4 border-secondary border-opacity-80 px-6  py-3  text-secondary shadow-sm placeholder:opacity-80 focus:border-secondary lg:border-[5px] lg:px-8 lg:py-4 lg:text-xl  "
              placeholder="Email"
              required
            />
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              type="text"
              id="phone"
              className=" text-md min-w-full rounded-2xl border-4 border-secondary border-opacity-80 px-6  py-3  text-secondary shadow-sm placeholder:opacity-80 focus:border-secondary lg:border-[5px] lg:px-8 lg:py-4 lg:text-xl  "
              placeholder="Телефон (+7)"
              required
            />
          </div>

          <div className="flex w-[100%] flex-col lg:row-span-1 ">
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="comment"
              rows="6"
              className="text-md rounded-2xl border-4 border-secondary border-opacity-80 px-6 py-3 text-secondary  shadow-sm placeholder:opacity-80 focus:border-secondary lg:border-[5px] lg:px-8 lg:py-4 lg:text-xl  "
              placeholder="Комментарии"
            />
            <div className="mt-8  flex flex-row items-center justify-center lg:mr-10 lg:justify-end">
              <button
                type="submit"
                className="text-md bg-primary-700 rounded-2xl bg-secondary px-5 py-3 text-center  font-medium text-white sm:w-fit lg:text-xl "
              >
                Отправить
              </button>
            </div>
          </div>
        </form>
        <h3 className="text-md w-[90vw] text-center lg:w-[30vw] lg:text-xl">
          Я разрешаю обработку персональных данных и соглашаюсь c политикой
          конфедициальности
        </h3>
      </div>
    </section>
  );
};

export default Contact;
