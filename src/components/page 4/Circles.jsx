import Circle1 from "../svgs/page 4 svgs/Icon1";
import Circle2 from "../svgs/page 4 svgs/Icon2";
import Circle3 from "../svgs/page 4 svgs/Icon3";
import Circle4 from "../svgs/page 4 svgs/Icon4";
import Circle5 from "../svgs/page 4 svgs/Icon5";

const circles = [
  {
    circle: Circle1,
    text: "Достижение целей",
  },
  {
    circle: Circle2,
    text: "Творческое мышление",
  },
  {
    circle: Circle3,
    text: "Учет доходов и расходов",
  },
  {
    circle: Circle4,
    text: "Мы всегда на связи",
  },
  {
    circle: Circle5,
    text: "Аналитика продаж",
    classNameAdd:
      "w-max lg:col-span-1 col-span-2 min-w-[100%] flex justify-center",
  },
];

export default function Circles() {
  return (
    <div className="flex justify-center  ">
      <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-20 ">
        {circles.map((circle, i) => (
          <div key={i} className={circle.classNameAdd}>
            <Circle
              IconComponent={circle.circle}
              text={circle.text}
              classNameAdd={circle.classNameAdd}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Circle({ IconComponent, text, classNameAdd }) {
  return (
    <div className={"flex w-min flex-col lg:col-span-1 "}>
      <div className="rounded-full border-4 border-secondary p-5 lg:p-8 ">
        <IconComponent />
      </div>
      <p className="text-center lg:text-2xl ">{text}</p>
    </div>
  );
}
