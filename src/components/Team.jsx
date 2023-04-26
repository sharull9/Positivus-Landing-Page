import React from "react";
import team1 from "../../public/assets/team1.svg";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <section class="px-5 pt-[20px]">
      <div class="flex justify-center items-center flex-col gap-[30px]">
        <div class="flex justify-center items-center flex-col">
          <h2 class="bg-primary inline rounded-xl p-1">Team</h2>
        </div>
        <p class="text-center">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="py-10 flex flex-col gap-5">
        <TeamCard
          name="John Smith"
          position="CEO and Founder"
          description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          image={team1}
        />
        <TeamCard
          name="John Smith"
          position="CEO and Founder"
          description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          image={team1}
        />
        <TeamCard
          name="John Smith"
          position="CEO and Founder"
          description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          image={team1}
        />
        <button className="btn-primary mt-[10px]">See all team</button>
      </div>
    </section>
  );
}

export default Team;
