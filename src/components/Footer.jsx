import Link from "next/link";
import Location_Icon from "./svgs/Location_Icon";
import Phone_Icon from "./svgs/Phone_Icon";
import Mail_Logo from "./svgs/logo/Mail_Logo";
import Telegram_Logo from "./svgs/logo/Telegram_Logo";
import Vk_Logo from "./svgs/logo/Vk_Logo";
import Whatsapp_Logo from "./svgs/logo/Whatsapp_Logo";
import ModalButton from "./modal/modalButton";

export default function Footer() {
  return (
    <footer className="lg:gap- flex h-[100svh] flex-col items-center justify-center gap-5 bg-primary text-sm text-white lg:mt-8 lg:text-xl">
      <div className="w-[90vw] text-center lg:w-[70vw] ">
        <h3 className="text-xl font-bold tracking-wider lg:text-5xl">
          Новый Концепт
        </h3>
        <br />

        <p className="text-md font-bold text-gray-200 lg:text-2xl">
          Добро пожаловать в мир непревзойдённого качества и доверия
        </p>
        <br />

        <p className="text-gray-200 lg:text-xl">
          Если вам необходимо запустить бизнdescес на маркетплейсах, обратитесь
          к нам. Мы готовы предоставить вам все необходимые знания, опыт и
          поддержку, чтобы ваш бизнес мог успешно конкурировать в мире
          электронной торговли.
        </p>
        <br />
        <p className="text-gray-200 lg:text-xl">
          конкурировать в мире электронной торговли. Доверьтесь компании «Новый
          Концепт» и вы обретете надежного партнера для развития вашего бизнеса
          на маркетплейсах. С нами вы погрузитесь в безопасную онлайн среду, где
          ваше спокойствие стоит на первом месте
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <Mail_Logo className="w-9 lg:w-12" />
        <Vk_Logo className="w-9 lg:w-12" />
        <Telegram_Logo className="w-9 lg:w-12" />
        <Whatsapp_Logo className="w-9 lg:w-12" />
      </div>
      <address className="mx-4 grid w-[80vw] grid-cols-[1fr_90%] items-center justify-center text-gray-200 lg:w-[50vw] lg:text-2xl">
        <div className="flex items-center justify-center">
          <Phone_Icon className="w-6 lg:w-9" />
        </div>
        <Link href="tel:+79372618">+7 (937) 261 261 8</Link>
        <div className="flex items-center justify-center">
          <Location_Icon className="w-4 lg:w-7" />
        </div>
        <span>410012, г. Саратов, ул. Слонова, д. 1, ДЦ «Парус»</span>
        <div className="flex items-center justify-center">
          <Mail_Logo className="w-4 lg:w-7" />
        </div>
        <Link href="mailto:new-concept@bk.ru">new-concept@bk.ru</Link>
      </address>
      <ModalButton
        text="Оставьте заявку"
        className="rounded-2xl border-[3px] px-6 py-2 lg:text-xl"
      />
      <small className="text-xs  lg:mt-4">© 2024 NOVYI KONCEPT</small>
    </footer>
  );
}
