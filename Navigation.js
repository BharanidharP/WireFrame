import React from "react";
import classes from "./Navigation.module.css";
import DraggableModal from "./Draggble";

const Navigation = (props) => {
  return (
    <div>
      <button
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
      <DraggableModal isOpen={popup} />
    </div>
  );
};

export default Navigation;
