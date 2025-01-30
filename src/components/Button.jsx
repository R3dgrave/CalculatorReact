import React from "react";

const Button = ({ label, onClick, className = "" }) => {
  return (
    <button
      className={`mb-2 p-4 text-xl font-bold rounded-lg shadow-md text-[#232946] bg-[#eebbc3] hover:bg-[#d3a5ac] active:bg-[#f14660] transition ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
