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
    // console.log(data);
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
        "FTfq34dz5c8TJFC5s",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    document.getElementById("my_modal_5").close();
    toast.success("Request sent succesfuly", {
      unstyled: false,
      classNames: {
        toast: "bg-white rounded-xl lg:p-3",
        title: "text-red-400 lg:text-xl",
        description: "text-red-400",
      },
      duration: 2500,
    });
  };
  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom items-center justify-center sm:modal-middle  "
      >
        <div className="mt-20 flex flex-col items-center justify-center gap-3 rounded-t-3xl bg-white pt-8 lg:mt-0 lg:gap-10 lg:rounded-2xl lg:p-10">
          <div className="relative flex w-full flex-row justify-center">
            <form method="dialog">
              <button className="btn btn-circle btn-ghost btn-sm absolute -top-5 right-3 lg:-right-8 lg:-top-8">
                ✕
              </button>
            </form>

            <h2 className=" text-center text-2xl font-extrabold tracking-tight text-secondary lg:text-5xl  ">
              Оставьте заявку
            </h2>
          </div>

          <p className="visible w-[90%]  text-center text-xs lg:hidden lg:w-[30vw] lg:text-xl ">
            Я разрешаю обработку персональных данных и соглашаюсь c политикой
            конфедициальности
          </p>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
          </form>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className=" grid w-[80vw] grid-cols-1 grid-rows-1 gap-8 lg:w-[70vw] lg:grid-cols-2 lg:gap-10"
          >
            <div className="flex  w-[100%] flex-wrap gap-6 lg:gap-10 ">
              <div className="min-w-full ">
                {errors.from_name?.message && (
                  <span className="absolute -mt-6 ml-1 text-sm text-red-600 lg:ml-5">
                    {errors.from_name.message}
                  </span>
                )}
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  className="text-md min-w-full rounded-2xl border-4 border-secondary border-opacity-80 px-3 py-2 text-secondary shadow-sm placeholder:opacity-80 focus:border-secondary lg:border-[5px] lg:px-8   lg:py-4 lg:text-xl  "
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
                  <span className="absolute -mt-6 ml-1 text-sm text-red-600 lg:ml-5">
                    {errors.from_email?.message}
                  </span>
                )}
                <input
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  id="mail"
                  className=" text-md min-w-full rounded-2xl border-4 border-secondary border-opacity-80 px-3  py-2  text-secondary shadow-sm placeholder:opacity-80 focus:border-secondary lg:border-[5px] lg:px-8 lg:py-4 lg:text-xl  "
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
                  <span className="absolute -mt-6 ml-1 text-sm text-red-600 lg:ml-5">
                    {errors.from_phone.message}
                  </span>
                )}
                <input
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  type="text"
                  id="phone"
                  className=" text-md min-w-full rounded-2xl border-4 border-secondary border-opacity-80 px-3  py-2  text-secondary shadow-sm placeholder:opacity-80 focus:border-secondary lg:border-[5px] lg:px-8 lg:py-4 lg:text-xl  "
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

            <div className="flex w-[100%] flex-col lg:row-span-1 ">
              {errors.message?.message && (
                <span className="absolute -mt-6 ml-1 text-sm text-red-600 lg:ml-5">
                  {errors.message.message}
                </span>
              )}
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                id="comment"
                rows="6"
                className="text-md rounded-2xl border-4 border-secondary border-opacity-80 px-3 py-2 text-secondary  shadow-sm placeholder:opacity-80 focus:border-secondary lg:border-[5px] lg:px-8 lg:py-4 lg:text-xl  "
                placeholder="Комментарии"
                {...register("message", {
                  required: "Please enter your Message",
                  maxLength: {
                    value: 400,
                    message: "Cant be more than 400 characters long",
                  },
                })}
              />
              <div className="mt-6  flex flex-row items-center justify-center lg:mr-10 lg:justify-end">
                <button className="bg-primary-700 rounded-2xl bg-secondary px-5 py-3 text-center text-sm font-medium  text-white focus:bg-secondary sm:w-fit lg:text-lg ">
                  Отправить
                </button>
              </div>
            </div>
          </form>

          <h3 className="text-md invisible w-[90vw] text-center lg:visible lg:w-[30vw] lg:text-xl ">
            Я разрешаю обработку персональных данных и соглашаюсь c политикой
            конфедициальности
          </h3>
        </div>
      </dialog>
    </div>
  );
};

export default ModalForm;
