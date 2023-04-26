import Image from "next/image";
import React from "react";
import svg1 from "../../public/assets/svg-1.svg";
import svg2 from "../../public/assets/svg-2.svg";
import svg3 from "../../public/assets/svg-3.svg";
import CallMadeIcon from "@mui/icons-material/CallMade";

function Services() {
  return (
    <section class="px-5">
      <div class="flex justify-center items-center flex-col gap-[30px]">
        <h2 class="bg-primary inline rounded-xl p-1">Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div class="py-[40px] flex flex-col gap-5">
        <div class="p-[50px] flex flex-col border border-dark rounded-3xl bg-light gap-[20px] border-b-4">
          <div class="col-span-2">
            <h3 class="bg-primary inline-block rounded-xl p-1">
              Search Engine
            </h3>
            <h3 class="bg-primary inline-block rounded-xl p-1">Optimization</h3>
          </div>
          <div class="grid grid-cols-2 h-[100px]">
            <div class="flex flex-col-reverse">
              <button class="rounded-[50%] bg-dark w-[41px] h-[41px] text-primary flex justify-center items-center">
                <CallMadeIcon />
              </button>
            </div>
            <div class="relative">
              <Image
                src={svg1}
                alt=""
                className="absolute w-full h-full"
                fill
              />
            </div>
          </div>
        </div>
        <div class="p-[50px] flex flex-col border border-dark rounded-3xl bg-primary gap-[20px] border-b-4">
          <div class="col-span-2">
            <h3 class="bg-white inline-block rounded-xl p-1">Pay-per-click</h3>
            <h3 class="bg-white inline-block rounded-xl p-1">advertising</h3>
          </div>
          <div class="grid grid-cols-2 h-[100px]">
            <div class="flex flex-col-reverse">
              <button class="rounded-[50%] bg-dark w-[41px] h-[41px] text-primary flex justify-center items-center">
                <CallMadeIcon />
              </button>
            </div>
            <div class="relative">
              <Image
                src={svg3}
                alt=""
                className="absolute w-full h-full"
                fill
              />
            </div>
          </div>
        </div>
        <div class="p-[50px] flex flex-col border border-dark rounded-3xl bg-dark gap-[20px] border-b-4">
          <div class="col-span-2">
            <h3 class="bg-primary inline-block rounded-xl p-1">Social Media</h3>
            <h3 class="bg-primary inline-block rounded-xl p-1">Marketing</h3>
          </div>
          <div class="grid grid-cols-2 h-[100px]">
            <div class="flex flex-col-reverse">
              <button class="rounded-[50%] bg-white w-[41px] h-[41px] text-dark flex justify-center items-center">
                <CallMadeIcon />
              </button>
            </div>
            <div class="relative">
              <Image
                src={svg2}
                alt=""
                className="absolute w-full h-full"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div class="p-[50px] bg-light rounded-3xl">
        <h3>Let’s make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button class="btn-primary mt-5">Get your proposal</button>
      </div>
    </section>
  );
}

export default Services;
