import Link from "next/link";
import React from "react";
import Mail_Logo from "../svgs/logo/Mail_Logo";
import Vk_Logo from "../svgs/logo/Vk_Logo";
import Telegram_Logo from "../svgs/logo/Telegram_Logo";
import Whatsapp_Logo from "../svgs/logo/Whatsapp_Logo";
import ModalButton from "../modal/modalButton";
import Phone_Icon from "../svgs/logo/Phone_Icon";
import Location_Icon from "../svgs/logo/Location_Icon";

const FooterNew = () => {
  return (
    <footer className="mt-10 bg-pink-950 px-[0] py-[70px] text-white">
      <div className="m-auto md:max-w-[1170px] ">
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-0">
          <div className="w-1/3 space-y-7 px-[15px] py-[0] [@media(max-width:767px)]:mb-[30px] [@media(max-width:767px)]:w-1/2">
            <h4 className="relative text-[20px] font-medium capitalize text-[#ffffff] before:absolute before:-bottom-[10px] before:left-[0] before:box-border before:h-[2px] before:w-[50px] before:bg-fuchsia-800 before:content-['']">
              О нас
            </h4>
            <ul className="list-none  space-y-5 pl-0 ">
              <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#Нашмиccия"
                >
                  Наша миccия
                </Link>
              </li>
              {/* <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#Нашиуслугиstategy"
                >
                  Стратегический подход
                </Link>
              </li> */}
              <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#Отзывыклиентов"
                >
                  Отзывы клиентов
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3 space-y-4 px-[15px] py-[0] [@media(max-width:767px)]:mb-[30px] [@media(max-width:767px)]:w-1/2">
            <h4 className="relative text-[20px] font-medium capitalize text-[#ffffff] before:absolute before:-bottom-[10px] before:left-[0] before:box-border before:h-[2px] before:w-[50px] before:bg-fuchsia-800 before:content-['']">
              Информация:
            </h4>
            {/* <ul className="list-none  space-y-5 pl-0">
              <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#service_1"
                >
                  Оформление поcтaвок
                </Link>
              </li>
              <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#"
                >
                  Аудит
                </Link>
              </li>
              <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#"
                >
                  Pекламных
                </Link>
              </li>
              <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#"
                >
                  Рaботa c отзывaми
                </Link>
              </li>
              <li>
                <Link
                  className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href="/#"
                >
                  Полное сопровождение магазина
                </Link>
              </li>
            </ul> */}

            <Link
              href="tel:+79372612618"
              className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
            >
              +7937 261 261 8
            </Link>
            {/* <span className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]">
              410012, г. Саратов, ул. Слонова, д. 1, ДЦ «Парус»
            </span> */}
            <Link
              href="mailto:info@novyikoncept.com"
              className="block pl-4 text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
            >
              info@novyikoncept.com
            </Link>
          </div>

          <div className="w-1/3 space-y-7 px-[15px] py-[0] [@media(max-width:767px)]:mb-[30px] [@media(max-width:767px)]:w-1/2">
            <h4 className="relative text-[20px]  font-medium capitalize text-[#ffffff] before:absolute before:-bottom-[10px] before:left-[0] before:box-border before:h-[2px] before:w-[50px] before:bg-fuchsia-800 before:content-['']">
              Подписывайтесь на нас
            </h4>
            <div className="flex flex-row items-center gap-5">
              <Link href="mailto:info@novyikoncept.com">
                <Mail_Logo className="w-10 transition hover:scale-[1.05] lg:w-8" />
              </Link>
              <Link href="https://vk.com/newconcept_russia">
                <Vk_Logo className="w-9 transition hover:scale-[1.05] lg:w-8" />
              </Link>
              <Link href="https://t.me/+79372612618">
                <Telegram_Logo className="w-9 transition hover:scale-[1.05] lg:w-8" />
              </Link>
              <Link href="https://wa.me/+79372612618">
                <Whatsapp_Logo className="w-9 transition hover:scale-[1.05] lg:w-8" />
              </Link>
              <ModalButton></ModalButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
