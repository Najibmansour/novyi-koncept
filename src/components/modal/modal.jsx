"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ModalForm = () => {
  const form = useRef();

  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [tel, setTel] = useState();
  const [desc, setDesc] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .send(
        "novo-concept-service-vqw",
        "template_vthxzz5",
        {
          from_name: data.from_name,
          from_email: data.from_email,
          from_phone: data.from_phone,
          message: data.message,
        },
        "FTfq34dz5c8TJFC5s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("my_modal_5").close();
    toast.info("Request sent succesfuly", {
      unstyled: false,
      classNames: {
        toast: "bg-white rounded-xl p-3",
        title: "text-red-400 text-xl",
        description: "text-red-400",
      },
      duration: 2500,
    });
  };
  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle justify-center items-center  "
      >
        <div className="flex flex-col justify-center items-center bg-white lg:p-10 pt-8 lg:rounded-2xl rounded-t-3xl lg:mt-0 mt-20 lg:gap-10 gap-3">
          <div className="flex-row flex w-full justify-center relative">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 -top-5 lg:-right-8 lg:-top-8">
                ✕
              </button>
            </form>

            <h2 className=" lg:text-5xl text-2xl tracking-tight font-extrabold text-center text-secondary  ">
              Оставьте заявку
            </h2>
          </div>

          <p className="lg:text-xl text-xs  lg:w-[30vw] w-[90%] text-center visible lg:hidden ">
            Я разрешаю обработку персональных данных и соглашаюсь c политикой
            конфедициальности
          </p>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
          </form>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className=" grid lg:grid-cols-2 grid-cols-1 grid-rows-1 lg:gap-10 gap-8 lg:w-[70vw] w-[80vw]"
          >
            <div className="w-[100%]  flex flex-wrap lg:gap-10 gap-6 ">
              <div className="min-w-full ">
                {errors.from_name?.message && (
                  <span className="absolute -mt-6 text-red-600 text-sm lg:ml-5 ml-1">
                    {errors.from_name.message}
                  </span>
                )}
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  className="lg:py-4 lg:px-8 px-3 py-2 focus:border-secondary placeholder:opacity-80 border-opacity-80 min-w-full lg:text-xl text-md text-secondary lg:border-[5px] border-4 border-secondary   rounded-2xl shadow-sm  "
                  placeholder="Ваше имя"
                  {...register("from_name", {
                    maxLength: {
                      value: 30,
                      message: "Must have at max 30 characters",
                    },
                    pattern: { value: /^[^\d]+$/, message: "Not valid name" },
                    required: "Name is required",
                  })}
                />
              </div>

              <div className="min-w-full">
                {errors.from_email?.message && (
                  <span className="absolute -mt-6 text-red-600 text-sm lg:ml-5 ml-1">
                    {errors.from_email?.message}
                  </span>
                )}
                <input
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  id="mail"
                  className=" lg:py-4 lg:px-8 px-3 py-2 focus:border-secondary placeholder:opacity-80 border-opacity-80  min-w-full  lg:text-xl text-md text-secondary rounded-2xl lg:border-[5px] border-4 border-secondary shadow-sm  "
                  placeholder="Email"
                  {...register("from_email", {
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Not a valid email",
                    },
                    required: "Email is required",
                  })}
                />
              </div>
              <div className="min-w-full">
                {errors.from_phone?.message && (
                  <span className="absolute -mt-6 text-red-600 text-sm lg:ml-5 ml-1">
                    {errors.from_phone.message}
                  </span>
                )}
                <input
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  type="text"
                  id="phone"
                  className=" lg:py-4 lg:px-8 px-3 py-2 focus:border-secondary placeholder:opacity-80 border-opacity-80  min-w-full  lg:text-xl text-md text-secondary rounded-2xl lg:border-[5px] border-4 border-secondary shadow-sm  "
                  placeholder="Телефон (+7)"
                  {...register("from_phone", {
                    pattern: {
                      value: /^\d+$/,
                      message: "Dont use symbols or spaces or letters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Not a valid phone number",
                    },
                    required: "Phone number is required",
                  })}
                />
              </div>
            </div>

            <div className="lg:row-span-1 w-[100%] flex flex-col ">
              {errors.message?.message && (
                <span className="absolute -mt-6 text-red-600 text-sm lg:ml-5 ml-1">
                  {errors.message.message}
                </span>
              )}
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                id="comment"
                rows="6"
                className="lg:py-4 lg:px-8 px-3 py-2 focus:border-secondary text-secondary placeholder:opacity-80 border-opacity-80  lg:text-xl text-md rounded-2xl shadow-sm lg:border-[5px] border-4 border-secondary  "
                placeholder="Комментарии"
                {...register("message", {
                  required: "Please enter your Message",
                  maxLength: {
                    value: 400,
                    message: "Cant be more than 400 characters long",
                  },
                })}
              />
              <div className="flex  flex-row lg:justify-end justify-center items-center lg:mr-10 mt-6">
                <button className="py-3 px-5 lg:text-lg focus:bg-secondary text-sm font-medium text-center text-white  rounded-2xl bg-primary-700 sm:w-fit bg-secondary ">
                  Отправить
                </button>
              </div>
            </div>
          </form>

          <h3 className="lg:text-xl text-md lg:w-[30vw] w-[90vw] text-center lg:visible invisible ">
            Я разрешаю обработку персональных данных и соглашаюсь c политикой
            конфедициальности
          </h3>
        </div>
      </dialog>
    </div>
  );
};

export default ModalForm;
