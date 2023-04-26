import React from "react";
import Faq from "./Faq";

function WorkingProcess() {
  return (
    <section class="px-5 pt-[20px]">
      <div class="flex justify-center items-center flex-col gap-[30px]">
        <div class="flex justify-center items-center flex-col">
          <h2 class="bg-primary inline rounded-xl p-1">Our Working</h2>
          <h2 class="bg-primary inline rounded-xl p-1">Process</h2>
        </div>
        <p class="text-center">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="py-10 flex flex-col gap-3">
        <Faq index="01" title={"Consultation"} />
        <Faq index="02" title={"Research and Strategy Development   "} />
        <Faq index="03" title={"Implementation"} />
        <Faq index="04" title={"Monitoring and Optimization"} />
        <Faq index="05" title={"Reporting and Communication"} />
        <Faq index="06" title={"Continual Improvement"} />
      </div>
    </section>
  );
}

export default WorkingProcess;
