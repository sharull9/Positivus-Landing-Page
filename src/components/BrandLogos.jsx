import Image from "next/image";
import React from "react";
import img1 from "../../public/assets/amazon.svg";
import img2 from "../../public/assets/dribble.svg";
import img3 from "../../public/assets/hubspot.svg";
import img4 from "../../public/assets/netflix.svg";
import img5 from "../../public/assets/notion.svg";
import img6 from "../../public/assets/zoom.svg";

function BrandLogos() {
  return (
    <section class="flex flex-col gap-[20px] py-[60px] overflow-x-hidden">
      <div class="grid grid-cols-3 gap-7 translate-x-[7%]">
        <div>
          <Image src={img1} alt="" className="grayscale" />
        </div>
        <div>
          <Image src={img2} alt="" className="grayscale" />
        </div>
        <div>
          <Image src={img3} alt="" className="grayscale" />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-7 translate-x-[-7%]">
        <div>
          <Image src={img4} alt="" className="grayscale" />
        </div>
        <div>
          <Image src={img5} alt="" className="grayscale" />
        </div>
        <div>
          <Image src={img6} alt="" className="grayscale" />
        </div>
      </div>
    </section>
  );
}

export default BrandLogos;
