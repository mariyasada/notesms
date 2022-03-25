import React from "react";
import "./colorPalette.css";

export const ColorPalette = () => {
  const colors = [
    "#fca5a5",
    "#fdba74",
    "#fcd34d",
    "#bef264",
    "#86efac",
    "#7dd3fc",
    "#c084fc",
    "#fb7185",
    "#60a5fa",
    "#34d399",
  ];
  return (
    <div className="colors-selector-container flex-center border-round ">
      {colors.map((coloritem, index) => {
        return (
          <ul className="list-item-of-color flex-center" key={index}>
            <li
              className="color-selector"
              key={coloritem.id}
              style={{ backgroundColor: coloritem }}
            ></li>
          </ul>
        );
      })}
    </div>
  );
};
