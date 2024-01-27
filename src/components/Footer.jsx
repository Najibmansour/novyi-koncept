import Location_Icon from "./svgs/Location_Icon";
import Phone_Icon from "./svgs/Phone_Icon";
import Mail_Logo from "./svgs/logo/Mail_Logo";
import Telegram_Logo from "./svgs/logo/Telegram_Logo";
import Vk_Logo from "./svgs/logo/Vk_Logo";
import Whatsapp_Logo from "./svgs/logo/Whatsapp_Logo";

export default function Footer() {
  return (
    <footer className="h-screen bg-primary flex flex-col justify-center items-center gap-4 pt-[100px] pb-[50px] text-xl text-white">
      <div className="text-center w-[70vw]">
        <h3 className="text-2xl font-bold">Новый Концепт</h3>
        <p className="font-bold">
          Добро пожаловать в мир непревзойдённого качества и доверия
        </p>
        <p>
          Если вам необходимо запустить бизнес на маркетплейсах, обратитесь к
          нам. Мы готовы предоставить вам все необходимые знания, опыт и
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
        <Mail_Logo />
        <Vk_Logo />
        <Telegram_Logo />
        <Whatsapp_Logo />
      </div>
      <address className="grid mx-4 justify-center items-center gap-1 grid-cols-[1fr_90%]">
        <div className="flex justify-center items-center">
          <Phone_Icon />
        </div>
        <span>+7 (937) 261 261 8</span>
        <div className="flex justify-center items-center">
          <Location_Icon />
        </div>
        <span>410012, г. Саратов, ул. Слонова, д. 1, ДЦ «Парус»</span>
        <div className="flex justify-center items-center">
          <Mail_Logo width={27} height={20} />
        </div>
        <span>new-concept@bk.ru</span>
      </address>
      <button className="px-6 py-2 rounded-2xl text-xl border-[3px]">
        Оставьте заявку
      </button>
      <small className="mt-8 -mb-6">2024 NOVYI KONCEPT</small>
    </footer>
  );
}
