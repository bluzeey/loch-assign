import React from "react";

function Slider() {
  return (
      <div className="h-96 m-auto overflow-hidden relative w-auto">
        <ul className="flex w-[calc(250px*3)] h-96 animate-scroll">
          <li >
          <img className="w-96 h-96" src="./notif1.svg"/>
          </li>
          <li >
          <img className="w-96 h-96" src="./notif2.svg"/>
          </li>
          <li>
          <img className="w-96 h-96" src="./notif3.svg"/>
          </li>
        </ul>
      </div>
  );
}

export default Slider;
