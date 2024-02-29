import React from "react";
import Rating from "../rating";

const Reviews = () => {
  return (
    <section className="flex h-auto w-screen flex-row justify-center">
      <article className="relative flex h-[95%] w-[90%] flex-col items-center space-y-4 lg:w-[70%]">
        <h1 className=" text-3xl text-white lg:text-5xl">Обзор и Рейтинг</h1>
        <div className="flex h-full w-full flex-col space-y-3 transition-transform lg:space-y-6 ">
          <div className="flex h-[10%] flex-col justify-center rounded-3xl border-2 border-white  bg-white bg-opacity-10 px-2 py-3 lg:flex-row">
            <article className="flex-auto px-2 text-white lg:w-[85%] lg:pr-10">
              <div className="relative w-full ">
                <div className="flex flex-row justify-start lg:pt-5">
                  <div className="flex w-14 items-center justify-center  lg:w-28">
                    <figure className="absolute  h-10 w-10 rounded-full bg-white lg:block lg:h-16 lg:w-16 " />
                  </div>

                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold tracking-wide lg:text-4xl">
                      Алёна, молодой предприниматель
                    </h1>
                  </div>
                </div>
              </div>
              <blockquote className="text-md w-[100%] py-2 leading-4 lg:h-[60%] lg:w-[80%] lg:pl-28 lg:pt-2 lg:text-xl">
                Помогли на начальном этапе - зарегистрировали кабинет, с нуля
                сделали карточки товаров, помогли с поставками. предоставленными
                услугами довольна, сделали все быстро и профессионально!
              </blockquote>
            </article>
          </div>
          <div className="flex h-[10%] flex-col justify-center rounded-3xl border-2 border-white  bg-white bg-opacity-10 px-2 py-3 lg:flex-row">
            <article className="flex-auto px-2 text-white lg:w-[85%] lg:pr-10">
              <div className="relative w-full ">
                <div className="flex flex-row justify-start lg:pt-5">
                  <div className="flex w-14 items-center justify-center  lg:w-28">
                    <figure className="absolute  h-10 w-10 rounded-full bg-white lg:block lg:h-16 lg:w-16 " />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold tracking-wide lg:text-4xl">
                      Сергей, владелец бизнеса
                    </h1>
                  </div>
                </div>
              </div>
              <blockquote className="text-md w-[100%] py-2 leading-4 lg:h-[60%] lg:w-[80%] lg:pl-28 lg:pt-2 lg:text-xl">
                У меня небольшое производство по изготовлению деревянных
                изделий, решил попробовать выйти на WB , обратился в компанию
                Новый концепт. Рад, что выбрал именно их, со всем помогли, все
                подсказали, проанализировали конкурентов. в данный момент уже
                запустил продажи и продолжаю сотрудничать с компанией.
              </blockquote>
            </article>
          </div>
          <div className="flex h-[10%] flex-col justify-center rounded-3xl border-2 border-white  bg-white bg-opacity-10 px-2 py-3 lg:flex-row">
            <article className="flex-auto px-2 text-white lg:w-[85%] lg:pr-10">
              <div className="relative w-full ">
                <div className="flex flex-row justify-start lg:pt-5">
                  <div className="flex w-14 items-center justify-center  lg:w-28">
                    <figure className="absolute  h-10 w-10 rounded-full bg-white lg:block lg:h-16 lg:w-16 " />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold tracking-wide lg:text-4xl">
                      Юлия, создатель онлайн-магазина украшений
                    </h1>
                  </div>
                </div>
              </div>
              <blockquote className="text-md w-[100%] py-2 leading-4 lg:h-[60%] lg:w-[80%] lg:pl-28 lg:pt-2 lg:text-xl">
                Обратились за помощью с целью улучшения карточек товаров и
                увеличения продаж. Достигли именно тех результатов, которые были
                нужны и на которые рассчитывали. Вырос трафик выдачи,
                увеличилось число переходов и процент выкупа. Отлично
                сработались! Рекомендую!
              </blockquote>
            </article>
          </div>
        </div>

        <div className="group absolute -bottom-1 h-[30%] w-[101%] rounded-b-3xl  bg-gradient-to-t from-gray-300  from-[1%] to-transparent to-[99%]  opacity-0 transition-all  hover:opacity-90  ">
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
