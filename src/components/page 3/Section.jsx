export default function Section({ direction, Img, children }) {
  let parentStyles = "";
  if (direction == "left") {
    parentStyles =
      "flex flex-col border-primary lg:border-[5px] border-4 border-r-0 lg:border-r-0 sm:flex-row  lg:rounded-l-[4.5rem] rounded-l-[3rem] lg:px-12 px-9 py-8 gap-8";
  } else if (direction == "right") {
    parentStyles =
      "flex flex-col border-secondary lg:border-[5px] border-4 border-l-0 lg:border-l-0 sm:flex-row-reverse  lg:rounded-r-[4.5rem] rounded-r-[3rem] lg:px-12 px-4 py-8 gap-8";
  } else {
    return <p className="text-red-500">Missing direction</p>;
  }

  return (
    <div className={parentStyles}>
      <div className="flex justify-center items-center lg:p-12 p-3">
        <Img
          fill={direction == "left" ? "#2E3192" : "#929B78"}
          className="lg:w-28  w-24"
        />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
