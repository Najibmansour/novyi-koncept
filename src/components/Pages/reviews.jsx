import React from "react";
import Rating from "../rating";

const Reviews = () => {
  return (
    <section className="flex h-screen w-screen flex-row justify-center">
      <article className="relative flex h-[95%] w-[70%] flex-col items-center space-y-4">
        <h1 className="text-6xl text-white">Обзор и Рейтинг</h1>
        <div className="flex h-full w-full flex-col space-y-6  transition-transform ">
          <div className="flex h-[40%] flex-row rounded-3xl border-2 border-white bg-white bg-opacity-10">
            <div className="w-[15%] flex-auto  px-10 py-5">
              <figure className="h-20 w-20 rounded-full bg-white " />
            </div>
            <article className="w-[85%] flex-auto  pr-10 text-white">
              <div className="relative h-[40%] w-full ">
                <div className="absolute right-0 top-3">
                  <Rating rating={4} />
                </div>
                <div className="flex flex-col justify-center pt-5">
                  <h1 className="text-4xl font-bold tracking-wide">
                    Nina Holloway
                  </h1>
                  <small className="text-lg text-gray-200">
                    29 August 2023
                  </small>
                </div>
              </div>
              <blockquote className="h-[60%] w-[80%] pt-2 text-2xl">
                Нужно было составить описание карточки товара, результат
                превзошел все ожидания! Мы поняли, что копирайтер в компании -
                очень талантливый специалист!
              </blockquote>
            </article>
          </div>
          <div className="flex h-[40%] flex-row rounded-3xl border-2 border-white bg-white bg-opacity-10">
            <div className="w-[15%] flex-auto  px-10 py-5">
              <figure className="h-20 w-20 rounded-full bg-white " />
            </div>
            <article className="w-[85%] flex-auto  pr-10 text-white">
              <div className="relative h-[40%] w-full ">
                <div className="absolute right-0 top-3">
                  <Rating rating={4} name="rating-2" />
                </div>
                <div className="flex flex-col justify-center pt-5">
                  <h1 className="text-4xl font-bold tracking-wide">
                    Oscar Rogers
                  </h1>
                  <small className="text-lg text-gray-200">
                    29 August 2023
                  </small>
                </div>
              </div>
              <blockquote className="h-[60%] w-[80%] pt-2 text-2xl">
                Все понравилось в работе с компанией Новый Концепт, начиная с
                первого созвона, выявления потребностей клиента и заканчивая
                работой с магазином.
              </blockquote>
            </article>
          </div>
          <div className="flex h-[40%] flex-row rounded-3xl border-2 border-white bg-white bg-opacity-10">
            <div className="w-[15%] flex-auto  px-10 py-5">
              <figure className="h-20 w-20 rounded-full bg-white " />
            </div>
            <article className="w-[85%] flex-auto  pr-10 text-white">
              <div className="relative h-[40%] w-full ">
                <div className="absolute right-0 top-3">
                  <Rating rating={4} name="rating-2" />
                </div>
                <div className="flex flex-col justify-center pt-5">
                  <h1 className="text-4xl font-bold tracking-wide">
                    Steve Fletcher
                  </h1>
                  <small className="text-lg text-gray-200">
                    29 August 2023
                  </small>
                </div>
              </div>
              <blockquote className="h-[60%] w-[100%] pt-0 text-2xl">
                Обратились за помощью с целью улучшения карточек товаров и
                увеличения продаж. Достигли именно тех результатов, которые были
                нужны и на которые рассчитывали. Вырос трафик выдачи,
                увеличилось число переходов и процент выкупа. Отлично
                сработались! Рекомендую!
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
