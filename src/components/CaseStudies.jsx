import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";

function CaseStudies() {
  return (
    <section class="px-5 pt-[60px] pb-[20px]">
      <div class="flex justify-center items-center flex-col gap-[30px]">
        <h2 class="bg-primary inline rounded-xl p-1">Case Studies</h2>
        <p class="text-center">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div class="flex py-[40px] gap-4 overflow-x-scroll">
        <div class="p-[50px] bg-dark rounded-3xl min-w-[300px]">
          <p class="text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <button class="flex justify-center items-center text-primary mt-[20px]">
            Learn more
            <CallMadeIcon />
          </button>
        </div>
        <div class="p-[50px] bg-dark rounded-3xl min-w-[350px]">
          <p class="text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <button class="flex justify-center items-center text-primary mt-[20px] text-[20px]">
            Learn more
            <CallMadeIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
