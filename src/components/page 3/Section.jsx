export default function Section({ direction, Img, children, inRef, id }) {
  let parentStyles = "";
  if (direction == "left") {
    parentStyles =
      "flex flex-col lg:w-[100%] w-[90%] border-white half-border-left  text-white rounded-l-full lg:px-12 px-9 py-8 gap-8 sm:flex-row";
  } else if (direction == "right") {
    parentStyles =
      "flex flex-col lg:w-[100%] w-[90%] border-white half-border-right  text-white border-t-0 rounded-r-full lg:px-12 px-4 py-8 gap-8 sm:flex-row-reverse";
  } else {
    return <p className="text-red-500">Missing direction</p>;
  }

  return (
    <article
      id={id}
      ref={inRef}
      className={`Box text flex w-[100%]  ${
        direction === "right"
          ? "Box-Left justify-start"
          : "Box-Right justify-end"
      }`}
    >
      <div className="" />
      <div className={parentStyles}>
        <div className="flex items-center justify-center rounded-full bg-white p-3 shadow-3xl lg:p-12 ">
          <Img fill={"#ffffff"} className="w-24 lg:w-28" />
        </div>
        <blockquote className="">{children}</blockquote>
      </div>
    </article>
  );
}
