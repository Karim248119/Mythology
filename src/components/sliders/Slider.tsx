"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideNext,
  h1Animation,
  pAnimation,
  slideOut,
  slidePrev,
} from "../Animations";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Nav from "../Nav";
import { Chapter, Myth as mythType } from "../../../types";
import arrow from "../../../public/assets/icons/arrow.png";
import Image from "next/image";
import { Myth } from "@/app/home";
import ImgEnhancer from "../ImgEnhancer";

const Slider = ({
  chapters,
  mythName,
}: {
  chapters: Chapter[];
  mythName?: string;
}) => {
  const [current, setCurrent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    if (chapters.length > 0) {
      setFadeOut(true);
      setTimeout(() => {
        const chapter = chapters[current];
        if (chapter) {
          router.push(`/${mythName}/${chapter.name}`);
        }
      }, 500);
    }
  };

  const nextSlide = () => {
    if (chapters.length > 0) {
      setCurrent((prev) => (prev + 1) % chapters.length);
    }
    setIsNext(true);
  };

  const prevSlide = () => {
    if (chapters.length > 0) {
      setCurrent((prev) => (prev - 1 + chapters.length) % chapters.length);
    }
    setIsNext(false);
  };

  if (chapters.length === 0) {
    return (
      <div className="text-white flex items-center justify-center h-screen"></div>
    );
  }
  const icon: mythType | undefined = Myth.find(
    (item) => item.name === mythName
  );
  return (
    <div className="relative h-screen overflow-hidden flex md:flex-row flex-col items-center justify-center bg-black">
      <Nav current={current} setCurrent={setCurrent} chapters={chapters} />
      {/* Image Slider */}
      <div className="md:w-1/2 w-full md:h-full overflow-hidden h-[50vh] relative ">
        <div className="h-full w-full absolute overflow-hidden top-0 left-0 z-10">
          {/* <div className=" w-full md:h-full h-full absolute overflow-hidden top-0 left-0 z-20 bg-black/10" /> */}
          <AnimatePresence>
            <motion.div
              key={current}
              className={`absolute w-full h-full `}
              {...(isNext ? slideNext : slidePrev)}
            >
              <ImgEnhancer
                src={chapters[current]?.img}
                className={`w-full h-full object-cover ${
                  mythName === "Egyptian" || "Chinese"
                    ? "object-top"
                    : "object-bottom"
                }`}
              />
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="absolute z-50 md:w-[50vw] w-full md:h-full h-[50vh] bg-primary"
            {...slideOut}
            animate={fadeOut ? slidePrev.animate : {}}
          />
        </div>
      </div>

      {/* Text Section */}
      <>
        <div className=" md:w-1/2 w-full md:h-full h-[50vh] flex md:items-center py-5 md:py-0 md:gap-10 text-center md:text-start px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 1 }}
              animate={{ opacity: fadeOut ? 0 : 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:w-[30vw]"
            >
              <div className="flex items-center text-primary -mt-5  md:hidden w-[90vw] justify-between">
                <button className="" onClick={prevSlide}>
                  <Image
                    src={arrow}
                    alt="next"
                    className="h-16 w-auto rotate-90"
                  />
                </button>
                <button className="" onClick={nextSlide}>
                  <Image
                    src={arrow}
                    alt="next"
                    className="h-16 w-auto -rotate-90"
                  />
                </button>
              </div>
              <motion.h1
                className="md:text-6xl text-2xl capitalize text-primary md:mb-5 mb-2 max-w-[95vw] text-wrap"
                {...h1Animation}
              >
                {chapters[current]?.name || "Unknown"}
              </motion.h1>
              <div></div>
              <motion.p
                className=" text-white/60 md:h-20 font-light md:text-base text-sm md:mb-5 mb-10"
                {...pAnimation}
              >
                {chapters[current]?.description || "No description available."}
              </motion.p>

              <Button
                onClick={handleNav}
                title="DISCOVER MORE"
                className="w-52  mx-auto md:m-0 "
              />
            </motion.div>
          </AnimatePresence>
          {/* Navigation */}
          <div className="md:flex items-center  text-primary -mt-5 hidden">
            <button className="" onClick={prevSlide}>
              <Image src={arrow} alt="next" className="h-16 w-auto rotate-90" />
            </button>
            <button className="" onClick={nextSlide}>
              <Image
                src={arrow}
                alt="next"
                className="h-16 w-auto -rotate-90"
              />
            </button>
          </div>
        </div>
      </>

      {!fadeOut && (
        <div className="absolute md:bottom-14 md:left-14 left-3 bottom-4 z-30 flex md:flex-col-reverse gap-2 justify-center items-center">
          <Image
            src={icon?.icon}
            alt="icon"
            width={20}
            height={20}
            className="md:w-5 w-4 aspect-square"
          />

          <div className="bg-primary/50 md:h-10 h-5 w-[1px]" />
          <p className="text-xs  md:-rotate-90 text-nowrap w-2">
            {chapters[current].type}
          </p>
        </div>
      )}
    </div>
  );
};

export default Slider;
