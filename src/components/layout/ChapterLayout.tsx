"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  borderAnimation,
  h3Animation,
  pAnimation,
  slideIn,
  slideOut2,
} from "@/components/Animations";
import Nav from "../Nav";
import border from "../../../public/assets/imgs/greek3.png";
import Image from "next/image";
import { Chapter } from "../../../types";

export default function ChapterLayout({
  children,
  chapter,
  icon,
}: {
  children: React.ReactNode;
  chapter: Chapter;
  icon: any;
}) {
  return (
    <div className="overflow-hidden">
      <Nav isLink={true} className="bg-black" />
      <div className="bg-black md:h-[60vh] h-[50vh] flex flex-col  md:flex-row md:justify-between gap-10 justify-center items-center md:px-32 px-5 ">
        <motion.div
          {...borderAnimation}
          className="border-l-2 border-primary md:pr-14 pl-5 overflow-x-hidden overflow-y-clip"
        >
          <motion.h1
            {...h3Animation}
            className="md:text-8xl text-4xl gap-2 flex flex-col "
          >
            <span className="md:text-base text-xs text-primary font-sans font-thin md:ml-2">
              {chapter.type}
            </span>
            <span className=" capitalize">{chapter.name}</span>
          </motion.h1>
        </motion.div>
        <motion.p {...pAnimation} className="md:w-[30vw] md:text-base text-xs ">
          {chapter.description}
        </motion.p>
      </div>
      <div className="h-[80vh] w-full relative overflow-hidden">
        <motion.img
          src={chapter.img}
          alt={chapter.name}
          className="w-full h-full left-0 object-cover  -z-10"
          {...slideIn}
        />
        <div className=" absolute bottom-5 left-5 flex flex-row-reverse justify-center items-center gap-1">
          <Image
            src={icon}
            alt="icon"
            width={20}
            height={20}
            className="md:w-5 w-4 aspect-square"
          />
          <div className="bg-primary/50 h-[1px] w-10" />
          <p className="font-light text-xs text-white/60">{chapter.type}</p>
        </div>
        <motion.div
          {...slideOut2}
          className="bg-primary w-[120vw] h-full absolute left-0 top-0"
        />
      </div>
      <motion.div
        className="flex pt-10"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 10,
        }}
      >
        <Image src={border} alt="Sliding Image" />
        <Image src={border} alt="Sliding Image" />
      </motion.div>
      <div className="bg-black">{children}</div>
    </div>
  );
}
