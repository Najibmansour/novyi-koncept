import InstagramIcon from "@/assets/svg_icons/instagram";
import TelegramIcon from "@/assets/svg_icons/telegram";
import WhatsappIcon from "@/assets/svg_icons/whatsapp";
import Link from "next/link";
import React from "react";
import Mail_Logo from "../svgs/logo/Mail_Logo";
import Vk_Logo from "../svgs/logo/Vk_Logo";
import Telegram_Logo from "../svgs/logo/Telegram_Logo";
import Whatsapp_Logo from "../svgs/logo/Whatsapp_Logo";
import ModalButton from "../modal/modalButton";

const FooterNew = () => {
  return (
    <footer class="mt-10 bg-pink-950 px-[0] py-[70px]">
      <div class="m-auto max-w-[1170px] ">
        <div class="flex flex-col gap-5 lg:flex-wrap lg:gap-0">
          <div class="w-1/3 space-y-7 px-[15px] py-[0] [@media(max-width:767px)]:mb-[30px] [@media(max-width:767px)]:w-1/2">
            <h4 className="relative text-[20px] font-medium capitalize text-[#ffffff] before:absolute before:-bottom-[10px] before:left-[0] before:box-border before:h-[2px] before:w-[50px] before:bg-fuchsia-800 before:content-['']">
              About Us
            </h4>
            <ul className="list-none  space-y-5 pl-0 ">
              <li>
                <a
                  className="block text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href=""
                >
                  What is our company
                </a>
              </li>
              <li>
                <a
                  className="block text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href=""
                >
                  What is the work strategy{" "}
                </a>
              </li>
              <li>
                <a
                  className="block text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href=""
                >
                  Why Choose us
                </a>
              </li>
            </ul>
          </div>
          <div class="w-1/3 space-y-7 px-[15px] py-[0] [@media(max-width:767px)]:mb-[30px] [@media(max-width:767px)]:w-1/2">
            <h4 className="relative text-[20px] font-medium capitalize text-[#ffffff] before:absolute before:-bottom-[10px] before:left-[0] before:box-border before:h-[2px] before:w-[50px] before:bg-fuchsia-800 before:content-['']">
              Our Services
            </h4>
            <ul className="list-none  space-y-5 pl-0">
              <li>
                <a
                  className="block text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href=""
                >
                  Sales Abroad
                </a>
              </li>
              <li>
                <a
                  className="block text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href=""
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  className="block text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href=""
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  className="block text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href=""
                >
                  Analyse
                </a>
              </li>
              <li>
                <a
                  className="block text-[18px] font-light capitalize text-[#ffffff] no-underline [transition:all_0.3s_ease] hover:pl-[8px] hover:text-[#ffffff]"
                  href=""
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>

          <div class="w-1/3 space-y-7 px-[15px] py-[0] [@media(max-width:767px)]:mb-[30px] [@media(max-width:767px)]:w-1/2">
            <h4 className="relative text-[20px] font-medium capitalize text-[#ffffff] before:absolute before:-bottom-[10px] before:left-[0] before:box-border before:h-[2px] before:w-[50px] before:bg-fuchsia-800 before:content-['']">
              follow us
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
