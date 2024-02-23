export default function Section({ direction, Img, children, inRef, id }) {
  let parentStyles = "";
  if (direction == "left") {
    parentStyles =
      "flex flex-col lg:w-[85%] w-[90%]  border-secondary lg:border-[5px] border-4 border-r-0 lg:border-r-0 sm:flex-row  lg:rounded-l-[4.5rem] rounded-l-[3rem] lg:px-12 px-9 py-8 gap-8";
  } else if (direction == "right") {
    parentStyles =
      "flex flex-col lg:w-[85%] w-[90%] border-primary lg:border-[5px] border-4 border-l-0 lg:border-l-0 sm:flex-row-reverse  lg:rounded-r-[4.5rem] rounded-r-[3rem] lg:px-12 px-4 py-8 gap-8";
  } else {
    return <p className="text-red-500">Missing direction</p>;
  }

  return (
    <article
      id={id}
      ref={inRef}
      className={`Box flex w-[100%]  ${
        direction === "right"
          ? "Box-Left justify-start"
          : "Box-Right justify-end"
      }`}
    >
      <div className={parentStyles}>
        <div className="flex items-center justify-center p-3 lg:p-12 ">
          <Img
            fill={direction == "left" ? "#2E3192" : "#929B78"}
            className="w-24 lg:w-28"
          />
        </div>
        <div className="">{children}</div>
      </div>
    </article>
  );
}
