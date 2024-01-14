import VideoPlayer from "@/components/VideoPlayer/vidPlayer";
import Logo from "@/components/svgs/logo/Logo";
import DownArrow from "@/components/svgs/symbols/downArrow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-primary flex flex-col items-center">
        <div className="navbar ">
          <Logo className="w-24 ml-52 mt-32" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 p-32  mt-10">
          <div className="avatar justify-end mr-24 ">
            <div className="w-[492px] rounded-full bg-gray-500 ring-[6px] ring-white ring-offset-[17px] ring-offset-primary  ">
              {/* <VideoPlayer /> */}
            </div>
          </div>
          <div className="w-[444px] h-[187px] flex mt-[20%]">
            <p className=" w-[444px]  font-normal text-white text-4xl tracking-[0] leading-[normal]">
              <span className=" font-normal text-white text-4xl tracking-[0]">
                &#34;Революционизация Услуг с
              </span>
              <span className="[font-family:'Helvetica-Bold',Helvetica] font-bold">
                Новым Концептом
              </span>
              <span className=" font-normal text-white text-4xl tracking-[0]">
                , Принимая Превосходство&#34;
                <br />
              </span>
              <span className="text-[20px]">
                <br />
              </span>
            </p>
          </div>
        </div>
        <div className="w-full text-primary-content flex flex-col mb-16 justify-end items-center h-full ">
          <p className="text-2xl mb-2">исследовать</p>
          <DownArrow className="w-14" />
        </div>
      </div>
    </div>
  );
}
