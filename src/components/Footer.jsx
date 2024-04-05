import Link from "next/link";
import Location_Icon from "./svgs/logo/Location_Icon";
import Phone_Icon from "./svgs/logo/Phone_Icon";
import Mail_Logo from "./svgs/logo/Mail_Logo";
import Telegram_Logo from "./svgs/logo/Telegram_Logo";
import Vk_Logo from "./svgs/logo/Vk_Logo";
import Whatsapp_Logo from "./svgs/logo/Whatsapp_Logo";
import ModalButton from "./modal/modalButton";

export default function Footer() {
  return (
    <footer className="flex h-screen flex-col items-center justify-center space-y-5 bg-transparent text-sm  text-white lg:text-xl">
      <div className="w-[90vw] space-y-3 text-left  lg:w-[75vw]">
        <h3 className="text-center text-4xl font-bold tracking-wider lg:mb-10 lg:text-5xl">
          ООО Новый Концепт
        </h3>
        {/* <br /> */}

        <p className="logoFont text-gray-200  lg:text-xl">
          Добро пожаловать в мир непревзойдённого качества и доверия. Если вам
          необходимо запустить бизнес на маркетплейсах, обратитесь к нам. Мы
          готовы предоставить вам все необходимые знания, опыт и поддержку,
          чтобы ваш бизнес мог успешно конкурировать в мире электронной
          торговли.
        </p>
        <br />
        <p className="logoFont text-gray-200  lg:text-xl">
          Доверьтесь компании «Новый Концепт» и вы обретете надежного партнера
          для развития вашего бизнеса на маркетплейсах. С нами вы погрузитесь в
          безопасную онлайн-среда, где ваше спокойствие стоит на первом месте.
        </p>
      </div>

      <address className="mx-0 grid w-[92vw] grid-cols-[1fr_90%] items-center justify-center space-y-2 text-gray-200 lg:w-[80vw] lg:space-y-5 lg:text-2xl">
        <div className="flex items-center justify-center">
          <Phone_Icon className="w-6 lg:w-9" />
        </div>
        <Link href="tel:+79372618">+7 937 261 261 8</Link>
        <div className="flex items-center justify-center">
          <Location_Icon className="w-4 lg:w-7" />
        </div>
        <span>410012, г. Саратов, ул. Слонова, д. 1, ДЦ «Парус»</span>
        <div className="flex items-center justify-center">
          <Mail_Logo className="w-4 lg:w-7" />
        </div>
        <Link href="mailto:info@novyikoncept.com">info@novyikoncept.com</Link>
      </address>
      {/* <ModalButton
        text="Оставьте заявку"
        className="rounded-2xl border-[3px] px-6 py-2 lg:text-xl"
      /> */}
      <ModalButton
        text="Оставьте заявку"
        className="btn-white btn rounded-full text-pink-800 shadow-3xl lg:text-2xl"
      />
      <br className="hidden lg:block" />
      <div className="flex items-center justify-center gap-x-4">
        <Link href="mailto:info@novyikoncept.com">
          <Mail_Logo className="w-10 transition hover:scale-[1.05] lg:w-12" />
        </Link>
        <Link href="https://vk.com/newconcept_russia">
          <Vk_Logo className="w-9 transition hover:scale-[1.05] lg:w-12" />
        </Link>
        <Link href="https://t.me/+79372612618">
          <Telegram_Logo className="w-9 transition hover:scale-[1.05] lg:w-12" />
        </Link>
        <Link href="https://wa.me/+79372612618">
          <Whatsapp_Logo className="w-9 transition hover:scale-[1.05] lg:w-12" />
        </Link>
      </div>
      <small className="text-xs  lg:mt-4">© 2024 NOVYI KONCEPT</small>
    </footer>
  );
}
