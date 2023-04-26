import React, { useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { Flag } from "@mui/icons-material";

function Testimonials() {
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(1);
  const [disabledbac, setDisabledbac] = useState(true);
  const [disabledfor, setDisabledFor] = useState(false);
  const testimonials = 4;

  function checker() {}

  useEffect(() => {
    if (index == 1) {
      setDisabledbac(true);
    } else {
      setDisabledbac(false);
    }
    if (index == 4) {
      setDisabledFor(true);
    } else {
      setDisabledFor(false);
    }
  }, [index]);

  const forward = () => {
    if (!(index >= testimonials)) setIndex(index + 1);
    setValue(-101 * index);

    setDisabledbac(false);
  };

  const backward = () => {
    if (!(index <= 1)) setIndex(index - 1);
    setValue(value + 101);

    setDisabledFor(false);
  };
  console.log(index, testimonials);
  return (
    <section class="px-5 pt-5">
      <div class="flex justify-center items-center flex-col gap-[30px]">
        <h2 class="bg-primary inline rounded-xl p-1">Testimonials</h2>
        <p className="text-center">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="py-5 overflow-x-hidden">
        <div className="bg-dark rounded-3xl text-white">
          <div
            id="testimonials"
            className="flex transition-all duration-500"
            style={{
              translate: `${value}% `,
            }}
          >
            <TestimonialsCard name={"john"} />
            <TestimonialsCard name={"harry"} />
            <TestimonialsCard name={"will"} />
            <TestimonialsCard name={"mike"} />
            <TestimonialsCard name={"jack"} />
          </div>
          <div className="flex p-5 flex-row">
            <div className="w-1/6 flex justify-center items-center">
              <button disabled={disabledbac} onClick={backward}>
                <ArrowBackIcon />
              </button>
            </div>
            <div className="w-4/6 flex justify-center items-center text-primary">
              {index == 1 && (
                <>
                  <FiberManualRecordIcon />
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordOutlinedIcon />
                </>
              )}
              {index == 2 && (
                <>
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordIcon />
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordOutlinedIcon />
                </>
              )}
              {index == 3 && (
                <>
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordIcon />
                  <FiberManualRecordOutlinedIcon />
                </>
              )}
              {index == 4 && (
                <>
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordOutlinedIcon />
                  <FiberManualRecordIcon />
                </>
              )}
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <button disabled={disabledfor} onClick={forward}>
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
