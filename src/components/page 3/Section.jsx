export default function Section({ direction, Img, children, inRef, id }) {
  let parentStyles = "";
  if (direction == "left") {
    parentStyles =
      "flex flex-col lg:gap-10 gap-y-2 items-center box-left w-full lg:h-[40vh]-my-[2px] lg:py-8 lg:px-8 sm:flex-row";
  } else if (direction == "right") {
    parentStyles =
      "flex flex-col lg:gap-0 gap-y-2 items-center box-right w-full lg:h-[40vh]-my-[2px] lg:py-8 lg:px-8 lg:pl-16 sm:flex-row-reverse";
  } else {
    return <p className="text-red-500">Missing direction</p>;
  }

  return (
    <li>
      <article
        id={id}
        ref={inRef}
        className={`Box text relative flex w-[100%] flex-col items-center gap-12 text-white lg:gap-0  ${
          direction === "right" ? "Box-Left " : "Box-Right "
        }`}
      >
        <div className="" />
        <div className={parentStyles}>
          <div className="flex items-center justify-center lg:w-[20%] ">
            <div className="rounded-full bg-white p-10 shadow-fullxl ">
              <Img fill="#ffffff" className="h-24 w-24 lg:h-28 lg:w-28" />
            </div>
          </div>
          <blockquote className="lg:w-[80%] ">{children}</blockquote>
        </div>
        {/* <hr className="absolute -top-[2px] right-[15%] h-[4px] w-[75%] bg-white" />
    <hr className="absolute -bottom-[2px] right-[15%] h-[4px] w-[75%] bg-white" /> */}
      </article>
    </li>
  );
}
