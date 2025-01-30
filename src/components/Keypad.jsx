import React from 'react';
import Button from './button';

const Keypad = ({ onButtonClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="grid grid-cols-4 gap-y-4 pt-6 gap-x-2">
      {buttons.map((btn) => (
        <Button
          key={btn}
          label={btn}
          onClick={onButtonClick}
          className={btn === "C" ? "col-span-4 bg-[#232946] hover:bg-red-500" : ""}
        />
      ))}
    </div>
  );
};

export default Keypad