import React from "react";

const BackgroudGradient = () => {
  return (
    <div className="relative h-[100%] w-screen overflow-hidden bg-gradient-to-r from-pink-900 to-fuchsia-800 blur-[150px] grayscale-[0.4] lg:h-[550svh] ">
      <figure className="shape1 absolute -right-[20%] bottom-[50%] h-[150vh] w-[150vh] rounded-full bg-[#996AA4] mix-blend-overlay" />
      <figure className="shape2 absolute -right-[20%]  -top-[10%] h-[150vh] w-[250vh] rounded-full bg-[#2b2264] mix-blend-darken" />
      <figure className="shape3 absolute -left-[50%] bottom-[0%] h-[150vh] w-[150vh] rounded-full bg-[#DF5C61] mix-blend-overlay lg:-left-[30%]" />
      <figure className="shape4 absolute -bottom-[15%] -right-[20%] h-[150vh] w-[150vh] rounded-full bg-[#852D90] mix-blend-overlay" />
      <figure className="shape1 absolute -right-[20%]  bottom-[14%] h-[150vh] w-[150vh] rounded-full bg-[#2D2460] mix-blend-overlay" />
      <figure className="shape2 absolute -right-[20%] bottom-[50%] h-[150vh] w-[150vh] rounded-full bg-[#986FAF] mix-blend-overlay" />
      <figure className="shape4 absolute -left-[70%] bottom-[33%] h-[200vh] w-[200vh] rounded-full bg-[#FF7765] mix-blend-overlay lg:-left-[50%]" />
      <figure className="shape5 absolute -left-[20%] -top-[10%] h-[200vh] w-[150vh] rounded-full bg-[#5a2b9b] mix-blend-darken" />
    </div>
  );
};

export default BackgroudGradient;

// #996AA4
// #852D90
// #DF5C61
// #2D2460
// #986FAF
// #FF7765
// #B24995
