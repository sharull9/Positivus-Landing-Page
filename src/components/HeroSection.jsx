import Image from "next/image";
import React from "react";
import img from "../../public/assets/Illustration.svg";

function HeroSection() {
  return (
    <section className="px-5 gap-[20px] flex flex-col md:grid md:grid-cols-2 md:grid-rows-2">
      <div>
        <h1>Navigating the digital landscape for success</h1>
      </div>
      <div className="row-span-2">
        <Image src={img} alt="" />
      </div>
      <div>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="btn-primary mt-10">Book a consultation</button>
      </div>
    </section>
  );
}

export default HeroSection;
