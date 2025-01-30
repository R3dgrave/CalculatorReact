import React from "react";

const Display = ({ value }) => {
  return (
    <div className="p-4 text-right text-2xl bg-[#fffffe] rounded-lg shadow-inner min-h-[60px]">
      {value || "0"}
    </div>
  );
};

export default Display;
