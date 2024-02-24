import React from "react";
import Rating from "../rating";

const Reviews = () => {
  return (
    <section className="flex h-screen w-screen flex-row justify-center">
      <article className="relative flex h-[95%] w-[90%] flex-col items-center space-y-4 lg:w-[70%]">
        <h1 className=" text-3xl text-white lg:text-5xl">Обзор и Рейтинг</h1>
        <div className="flex h-full w-full flex-col space-y-3 transition-transform lg:space-y-6 ">
          <div className="flex h-[40%] flex-col justify-center rounded-3xl border-2 border-white  bg-white bg-opacity-10 p-2 lg:flex-row">
            <article className="flex-auto px-2 text-white lg:w-[85%] lg:pr-10">
              <div className="relative w-full lg:h-[40%]">
                <div className="absolute right-0 top-3">
                  <Rating rating={4} className="hidden lg:block" />
                </div>
                <div className="flex flex-row justify-start lg:pt-5">
                  <div className="flex w-14 items-center justify-center  lg:w-28">
                    <figure className="absolute  h-10 w-10 rounded-full bg-white lg:block lg:h-16 lg:w-16 " />
                  </div>

                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold tracking-wide lg:text-4xl">
                      Nina Holloway
                    </h1>
                    <small className="text-sm text-gray-200">
                      29 August 2023
                    </small>
                  </div>
                </div>
              </div>
              <Rating rating={4} className="block lg:hidden" />

              <blockquote className="text-md w-[90%] leading-4 lg:h-[60%] lg:w-[80%] lg:pl-28 lg:pt-2 lg:text-xl">
                Нужно было составить описание карточки товара, результат
                превзошел все ожидания! Мы поняли, что копирайтер в компании -
                очень талантливый специалист!
              </blockquote>
            </article>
          </div>
          <div className="flex h-[40%] flex-col justify-center rounded-3xl border-2 border-white  bg-white bg-opacity-10 p-2 lg:flex-row">
            <article className="flex-auto px-2 text-white lg:w-[85%] lg:pr-10">
              <div className="relative w-full lg:h-[40%]">
                <div className="absolute right-0 top-3">
                  <Rating rating={4} className="hidden lg:block" />
                </div>
                <div className="flex flex-row justify-start lg:pt-5">
                  <div className="flex w-14 items-center justify-center  lg:w-28">
                    <figure className="absolute  h-10 w-10 rounded-full bg-white lg:block lg:h-16 lg:w-16 " />
                  </div>

                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold tracking-wide lg:text-4xl">
                      Nina Holloway
                    </h1>
                    <small className="text-sm text-gray-200">
                      29 August 2023
                    </small>
                  </div>
                </div>
              </div>
              <Rating rating={4} className="block lg:hidden" />

              <blockquote className="text-md w-[90%] leading-4 lg:h-[60%] lg:w-[80%] lg:pl-28 lg:pt-2 lg:text-xl">
                Нужно было составить описание карточки товара, результат
                превзошел все ожидания! Мы поняли, что копирайтер в компании -
                очень талантливый специалист!
              </blockquote>
            </article>
          </div>
          <div className="flex h-[40%] flex-col justify-center rounded-3xl border-2 border-white  bg-white bg-opacity-10 p-2 lg:flex-row">
            <article className="flex-auto px-2 text-white lg:w-[85%] lg:pr-10">
              <div className="relative w-full lg:h-[40%]">
                <div className="absolute right-0 top-3">
                  <Rating rating={4} className="hidden lg:block" />
                </div>
                <div className="flex flex-row justify-start lg:pt-5">
                  <div className="flex w-14 items-center justify-center  lg:w-28">
                    <figure className="absolute  h-10 w-10 rounded-full bg-white lg:block lg:h-16 lg:w-16 " />
                  </div>

                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold tracking-wide lg:text-4xl">
                      Nina Holloway
                    </h1>
                    <small className="text-sm text-gray-200">
                      29 August 2023
                    </small>
                  </div>
                </div>
              </div>
              <Rating rating={4} className="block lg:hidden" />

              <blockquote className="text-md w-[90%] leading-4 lg:h-[60%] lg:w-[80%] lg:pl-28 lg:pt-2 lg:text-xl">
                Нужно было составить описание карточки товара, результат
                превзошел все ожидания! Мы поняли, что копирайтер в компании -
                очень талантливый специалист!
              </blockquote>
            </article>
          </div>
        </div>

        <div className="group absolute -bottom-7 h-[30%] w-[102%] rounded-b-3xl  bg-gradient-to-t from-gray-300  from-[1%] to-transparent to-[99%]  opacity-0 transition-all  hover:opacity-90  ">
          <div className=" flex h-full w-full flex-row items-center justify-center rounded-b-3xl  text-center text-3xl font-bold text-transparent shadow-3xl hover:text-rose-950">
            <p className="btn btn-ghost mt-12 rounded-full text-xl shadow-2xl hover:bg-gray-200">
              SHOW MORE
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Reviews;
