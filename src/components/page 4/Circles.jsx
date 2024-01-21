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
  },
];

export default function Circles() {
  return (
    <div className="flex justify-evenly gap-4 w-full flex-wrap ">
      {circles.map((circle, i) => (
        <Circle key={i} IconComponent={circle.circle} text={circle.text} />
      ))}
    </div>
  );
}

function Circle({ IconComponent, text }) {
  return (
    <div className="flex flex-col w-[150px] gap-4">
      <div className="p-8 border-secondary border-4 rounded-full">
        <IconComponent />
      </div>
      <p className="text-center">{text}</p>
    </div>
  );
}
