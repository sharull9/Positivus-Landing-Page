import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

function TeamCard({ name, position, description, image }) {
  return (
    <div className="p-9 border border-dark border-b-4 rounded-[25%] bg-light">
      <div className="border-b border-dark grid grid-cols-3 pb-5 gap-2">
        <div className="">
          <Image src={image} alt="" />
        </div>
        <div className="relative flex flex-col justify-end col-span-2">
          <h4>{name}</h4>
          <p>{position}</p>
          <div className="absolute right-0 top-0">
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="py-5">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TeamCard;
