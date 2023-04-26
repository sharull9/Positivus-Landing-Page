import React from "react";

function TestimonialsCard({ name }) {
  return (
    <div className="text-white p-5 flex flex-col gap-10 min-w-[335px]">
      <div className={`bg-contain bg-no-repeat bg-center bg-clip-padding`}>
        <p className="p-5 border border-primary rounded-3xl">
          &ldquo;We have been working with Positivus for the past year and have
          seen a significant increase in website traffic and leads as a result
          of their efforts. The team is professional, responsive, and truly
          cares about the success of our business. We highly recommend Positivus
          to any company looking to grow their online presence.&rdquo;
        </p>
      </div>
      <div className="pl-16">
        <h4>{name}</h4>
        <p>Marketing director at xyz</p>
      </div>
    </div>
  );
}

export default TestimonialsCard;
