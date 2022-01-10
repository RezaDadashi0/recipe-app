import React from "react";
import "../../Styles/button.css";

export default function Button({ title, name, onClick }) {
  return (
    <div onClick={onClick} className={`button ${name}`}>
      {title}
    </div>
  );
}
