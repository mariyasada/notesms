import React from "react";
import "./colorPalette.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  "#0891b2",
  "#f472b6",
  "#22c55e",
  "#93c5fd",
];

export const ColorPalette = ({ listColor, setListColor }) => {
  const addColor = (color) => {
    setListColor(color);
    notify();
  };

  const notify = () => {
    toast.dark("color added");
  };
  return (
    <div className="colors-selector-container flex-center border-round ">
      {colors.map((coloritem, index) => {
        return (
          <ul className="list-item-of-color flex-center" key={index}>
            <li
              className="color-selector"
              key={coloritem.id}
              style={{ backgroundColor: coloritem }}
              onClick={() => addColor(coloritem)}
            ></li>
          </ul>
        );
      })}
      <ToastContainer autoClose={4000} />
    </div>
  );
};
