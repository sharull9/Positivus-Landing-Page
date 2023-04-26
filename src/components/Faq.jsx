import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Faq({ index, title }) {
  return (
    <div className="border border-dark border-b-4 h-24 rounded-full grid grid-cols-4 relative z-10 bg-white">
      <div className="flex justify-center items-center">
        <p className="font-medium text-[30px]">{index}</p>
      </div>
      <div className="col-span-2 flex justify-start items-center">
        <h4>{title}</h4>
      </div>
      <div className="flex justify-center items-center">
        <AddCircleOutlineIcon />
      </div>
    </div>
  );
}

export default Faq;
