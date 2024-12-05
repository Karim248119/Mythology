import React from "react";
import { Myth } from "../../../types";
import Link from "next/link";
import Image from "next/image";

export default function ReversedCard({
  className,
  myth,
  index,
}: {
  className?: string;
  myth: Myth;
  index: number;
}) {
  return (
    <Link
      href={`/${myth.name}`}
      className={`md:h-80 md:w-64 w-60 h-80 cursor-none relative group scale-x-[-1] ${className}`}
    >
      <div className="h-full w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px]">
        <img
          src={myth.img}
          alt="zeus"
          className="h-full w-full object-cover rounded-tl-[100px] rounded-br-[100px] filter grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300"
        />
      </div>
      <div className="w-full h-full text-start px-10 rounded-tl-[100px] rounded-br-[100px] bg-black/50 z-10 center flex flex-col gap-3 justify-center ">
        <h1 className="mt-10 text-lg scale-x-[-1] opacity-0 group-hover:opacity-100 duration-300">
          {myth.name}
        </h1>
        <p className="text-xs text-white/70 scale-x-[-1] font- opacity-0 group-hover:opacity-100 duration-300">
          {myth.description}
        </p>
      </div>
      <div className="h-8 w-8 border absolute -right-[3px] top-1/2 -translate-y-1/2 bg-primary flex justify-center items-center rotate-45 z-30 scale-100 group-hover:scale-100 duration-700">
        <span className="group-hover:rotate-90 duration-300">↖</span>
      </div>
      <div className="w-[90%] h-[90%] rounded-tl-[90px] rounded-br-[90px] border-white/30 border center z-20 relative">
        <Image
          src={myth?.icon}
          alt="icon"
          width={20}
          height={20}
          className="absolute bottom-4 left-4"
        />
      </div>
      <div className="w-[100%] h-[20%] rounded-tl-[140px] rounded-br-[140px] border-l border-b absolute left-0 md:-top-1 md:-left-1 top-3 z-20 border-primary" />
      <div className="w-full flex items-center gap-3 absolute left-0 md:-top-10 -top-5 z-20 ">
        <span className="w-[80%] h-[1px] bg-gradient-to-r from-black to-primary" />
        <span className=" italic scale-x-[-1]">
          {index + 1 < 10 && "0"}
          {index + 1} .
        </span>
      </div>
      {/* <div className="w-[calc(100%+4px)] h-[calc(100%+1px)] border-l-2 border-b-2 border-primary/50 absolute -bottom-5 -right-5 rounded-br-[100px] rounded-tl-[110px] -z-10 group-hover:-bottom-[2px] group-hover:-right-[2px] duration-500" /> */}
      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-violet-500 absolute -bottom-5 -right-5 rounded-br-[110px] rounded-tl-[110px] -z-10 group-hover:bottom-0 group-hover:right-0 duration-500" />
    </Link>
  );
}
