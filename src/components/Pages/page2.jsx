import React from "react";
import GridElement from "../page 2/gridElement";
import PointsText from "../page 2/PointsText";
import PictureLaptop from "../page 2/picture";
import Link from "next/link";
import ModalForm from "../modal/modal";
import ModalButton from "../modal/modalButton";

const Page2 = () => {
  return (
    <section className="mt-10 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-transparent lg:gap-16">
      <div className="ml-10 grid w-[80%] grid-cols-1 gap-10 gap-y-5 lg:grid-cols-2 lg:grid-rows-3">
        <div className=" flex flex-row items-end justify-center pb-5 lg:order-first lg:col-span-2">
          <p>
            <span className="font-['Helvetica-Bold',Helvetica] text-xl font-semibold text-white lg:w-[30%] lg:text-5xl">
              {"Наша миccия - "}
            </span>
            <span className="logoFont text-xl text-white lg:w-[50rem] lg:text-5xl">
              освободить время клиентов и увеличить их прибыль.
            </span>
          </p>
        </div>
        <PictureLaptop className="order-first lg:order-last lg:row-span-2" />
        <div className="my-auto  text-white lg:row-span-2 ">
          <PointsText className="" />
        </div>
      </div>
      {/* <Link href="/contact" className="btn btn-white lg:text-xl ">
        Оставьте заявку
      </Link> */}
      <ModalButton
        text="Оставьте заявку"
        className="btn-white btn rounded-full text-purple-700 shadow-3xl lg:text-2xl"
      />

      <ModalForm />
    </section>
  );
};

export default Page2;
