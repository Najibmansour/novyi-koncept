import React from "react";
import GridElement from "../page 2/gridElement";
import PointsText from "../page 2/PointsText";
import PictureLaptop from "../page 2/picture";
import Link from "next/link";
import ModalForm from "../modal/modal";
import ModalButton from "../modal/modalButton";

const Page2 = () => {
  return (
    <div className="mt-10 flex h-screen w-screen flex-col items-center justify-center gap-8 lg:gap-16">
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:grid-rows-3 ">
        <div className="flex  flex-col items-center lg:order-first lg:col-span-2 ">
          <p className="text-center text-2xl font-semibold text-secondary lg:w-[50rem] lg:text-5xl">
            Наша миccия
          </p>
          <p className="text-center text-xl text-secondary lg:w-[50rem] lg:text-5xl">
            освободить время клиентов и увеличить их прибыль
          </p>
        </div>
        <PictureLaptop className="order-first lg:order-last lg:row-span-2" />
        <div className="m-auto lg:row-span-2">
          <PointsText className="" />
        </div>
      </div>
      {/* <Link href="/contact" className="btn btn-secondary lg:text-xl ">
        Оставьте заявку
      </Link> */}
      <ModalButton
        text="Оставьте заявку"
        className="btn btn-secondary lg:text-xl"
      />

      <ModalForm />
    </div>
  );
};

export default Page2;
