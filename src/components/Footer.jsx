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
    <footer className="h-screen bg-primary flex flex-col justify-center items-center lg:gap-10 gap-8 text-sm lg:text-2xl text-white">
      <div className="text-center lg:w-[70vw] w-[80vw] ">
        <h3 className="text-2xl font-bold">Новый Концепт</h3>
        <p className="font-bold">
          Добро пожаловать в мир непревзойдённого качества и доверия
        </p>
        <p>
          Если вам необходимо запустить бизнdescес на маркетплейсах, обратитесь
          к нам. Мы готовы предоставить вам все необходимые знания, опыт и
          поддержку, чтобы ваш бизнес мог успешно конкурировать в мире
          электронной торговли.
        </p>
        <br />
        <p>
          конкурировать в мире электронной торговли. Доверьтесь компании «Новый
          Концепт» и вы обретете надежного партнера для развития вашего бизнеса
          на маркетплейсах. С нами вы погрузитесь в безопасную онлайн среду, где
          ваше спокойствие стоит на первом месте
        </p>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <Mail_Logo className="lg:w-12 w-10" />
        <Vk_Logo className="lg:w-12 w-10" />
        <Telegram_Logo className="lg:w-12 w-10" />
        <Whatsapp_Logo className="lg:w-12 w-10" />
      </div>
      <address className="grid mx-4 justify-center items-center gap-y-4 lg:w-[50vw] w-[80vw] grid-cols-[1fr_90%] lg:text-2xl">
        <div className="flex justify-center items-center">
          <Phone_Icon className="lg:w-9 w-6" />
        </div>
        <span>+7 (937) 261 261 8</span>
        <div className="flex justify-center items-center">
          <Location_Icon className="lg:w-7 w-4" />
        </div>
        <span>410012, г. Саратов, ул. Слонова, д. 1, ДЦ «Парус»</span>
        <div className="flex justify-center items-center">
          <Mail_Logo className="lg:w-7 w-4" />
        </div>
        <span>new-concept@bk.ru</span>
      </address>
      {/* <Link
        href="/contact"
        className="px-6 py-2 rounded-2xl lg:text-xl lg:mt-8 border-[3px]"
      >
        Оставьте заявку
      </Link> */}
      <ModalButton
        text="Оставьте заявку"
        className="px-6 py-2 rounded-2xl lg:text-xl lg:mt-8 border-[3px]"
      />
      <small className="lg:mt-4 mt-0 -mb-6 text-sm">2024 NOVYI KONCEPT</small>
    </footer>
  );
}
