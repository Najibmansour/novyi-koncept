export default function Section({ direction, Img, children, inRef, id }) {
  let parentStyles = "";
  if (direction == "left") {
    parentStyles =
      "flex flex-col lg:w-[80%]  rounded-l-full lg:-ml-[13%] -my-[2px] py-8 px-8 border-4 border-white border-r-0 sm:flex-row";
  } else if (direction == "right") {
    parentStyles =
      "flex flex-col lg:w-[80%]  rounded-r-full lg:-mr-[13%] -my-[2px] py-8 px-8 border-4 border-white border-l-0 sm:flex-row-reverse";
  } else {
    return <p className="text-red-500">Missing direction</p>;
  }

  return (
    <article
      id={id}
      ref={inRef}
      className={`Box text relative flex w-[100%] flex-col items-center text-white  ${
        direction === "right" ? "Box-Left " : "Box-Right "
      }`}
    >
      <div className="" />
      <div className={parentStyles}>
        <div className="flex w-[20%] items-center justify-center ">
          <div className="rounded-full bg-white p-10">
            <Img fill="#ffffff" className="h-24 w-24 lg:h-28 lg:w-28" />
          </div>
        </div>
        <blockquote className="w-[80%] ">{children}</blockquote>
      </div>
      {/* <hr className="absolute -top-[2px] right-[15%] h-[4px] w-[75%] bg-white" />
      <hr className="absolute -bottom-[2px] right-[15%] h-[4px] w-[75%] bg-white" /> */}
    </article>
  );
}
