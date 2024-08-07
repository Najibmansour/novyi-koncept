import React from "react";
import Bullet from "../svgs/bullet";

//

const reviews = [
  {
    title: "Дмитрий, продавец деревянных изделий",
    desc: "У меня небольшое производство по изготовлению деревянных изделий, решил попробовать выйти на WB, обратился в компанию Новый Концепт. Рад, что выбрал именно их, со всем помогли, все подсказали, проанализировали конкурентов. в данный момент уже запустил продажи и продолжаю сотрудничать с компанией.",
  },
  {
    title: "Юлия, создатель онлайн-магазина украшений",
    desc: "Обратились за помощью с целью улучшения карточек товаров и  увеличения продаж. Достигли именно тех результатов, которые были нужны и на которые рассчитывали. Вырос трафик выдачи, увеличилось число переходов и процент выкупа. Отлично сработались! Рекомендую!",
  },
  {
    title: "Алёна, молодой предприниматель",
    desc: "Помогли на начальном этапе - зарегистрировали кабинет, с нуля сделали карточки товаров, помогли с поставками, предоставленными услугами довольна, сделали все быстро и профессионально!",
  },
  {
    title: "Сергей, владелец бизнеса",
    desc: "Все подробно обсудили, все вопросы решили, подобрали товар. Все вопросы поставок и подготовки команда решает. О каждом этапе рассказывают. Я доволен!",
  },
  {
    title: "Ольга, молодой предприниматель",
    desc: "Нужно было составить описание карточки товара, результат превзошел все ожидания!  Мы поняли, что копирайтер в компании - очень талантливый специалист!",
  },
  {
    title: "Дарья, начинающий предприниматель",
    desc: "Все понравилось в работе с компанией Новый Концепт, начиная с первого созвона, выявления потребностей клиента и заканчивая работой с магазином. Сроки выполнения тоже очень устроили!",
  },
];

const Reviews = () => {
  return (
    <section className="flex w-screen flex-col items-center justify-center">
      <h3 className="text-2xl font-bold text-white lg:text-5xl">
        Отзывы клиентов
      </h3>
      <div className="mx-10 my-5 grid h-auto w-[80%] gap-5 lg:my-6 lg:grid-cols-2 lg:grid-rows-3 ">
        {reviews.map((review, i) => (
          <article
            key={i}
            className="rounded-3xl border-4 border-white bg-white bg-opacity-20 p-4 text-white transition-transform lg:hover:scale-[1.02]"
          >
            <div className="relative flex flex-row">
              <Bullet className="absolute top-[5px] mr-4 w-2 lg:top-3 lg:w-2" />

              <h5 className="pl-4 text-lg font-semibold  leading-5 tracking-wide lg:pl-5 lg:text-xl">
                {review.title}
              </h5>
            </div>
            <blockquote className="italic leading-4 lg:text-lg lg:leading-5">
              {review.desc}
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
