import * as React from "react";
import ChartSVG from "../svgs/chart/chart";
import TickSVG from "../svgs/chart/tick";
import CrossSVG from "../svgs/chart/cross";

const ROWS = [
  { id: 0, title: "Цена", checks: [true, false, false] },
  { id: 1, title: "Дизайн", checks: [true, false, true] },
  { id: 2, title: "Производительность", checks: [false, true, true] },
  { id: 3, title: "Поддержка Клиентов", checks: [true, true, false] },
  { id: 4, title: "Совместимость", checks: [true, false, true] },
  { id: 5, title: "Инновации", checks: [true, false, false] },
  { id: 6, title: "Удобство Использования", checks: [true, true, false] },
  { id: 7, title: "Гарантия", checks: [true, false, true] },
];

const TableElement = (props) => (
  <table className="">
    <thead>
      <tr className="text-primary lg:text-xl  ">
        <td className="flex h-full justify-end lg: pr-7 lg:py-5 py-5 mt-5">
          <ChartSVG className="lg:w-32 w-24 " />
        </td>
        <td className="-rotate-90 h-40 w-14 lg:border-x-4 border-x-[3px] border-primary">
          <p className=" text-nowrap font-bold lg:-left-12 -left-10  lg:top-20 top-[4.3rem] absolute ">
            Ваш Продукт
          </p>
        </td>
        <td className="-rotate-90 h-40 w-14 lg:border-x-4 border-x-[3px] border-primary">
          <p className=" text-nowrap font-bold lg:-left-12 -left-10  lg:top-20 top-[4.3rem] absolute ">
            Конкурент A
          </p>
        </td>
        <td className="-rotate-90 h-40 w-14 lg:border-x-4 border-x-[3px] border-primary">
          <p className=" text-nowrap font-bold lg:-left-12 -left-10  lg:top-20 top-[4.3rem] absolute ">
            Конкурент B
          </p>
        </td>
      </tr>
    </thead>
    <tbody className="text-xl">
      {ROWS.map((row) => (
        <tr
          className="border-primary lg:border-y-4 border-y-[3px] content-center"
          key={row.id}
        >
          <th className="lg:pl-14 pl-2 py-2 pr-4 lg:text-lg text-xs font-[500] text-right ">
            {row.title}
          </th>
          {row.checks.map((check) => (
            <td
              key={check}
              className="lg:border-x-4 border-x-[3px] border-primary text-center"
            >
              {check ? (
                <TickSVG className="w-5 lg:w-6 m-auto" />
              ) : (
                <CrossSVG className="w-3 lg:w-4 m-auto" />
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
export default TableElement;
