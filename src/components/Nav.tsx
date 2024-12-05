"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Chapter } from "../../types";
import { GiGreekTemple } from "react-icons/gi";

export default function Nav({
  chapters,
  isLink = false,
  current,
  setCurrent,
  className,
}: {
  chapters?: Chapter[];
  isLink?: boolean;
  current?: number;
  setCurrent?: (value: number) => void;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  console.log("mythData from nav:", chapters);

  const path = usePathname();

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 w-full h-20 md:px-14 px-2 flex items-center ${className}`}
      >
        <div className="w-full flex flex-row items-center md:gap-5 gap-2 z-50">
          <Link
            href="/"
            className="md:text-2xl text-lg flex items-center gap-1 "
          >
            <GiGreekTemple />
          </Link>
          <div className="h-[2px] flex-1 bg-primary/20" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:p-5 p-3 flex flex-col relative items-center "
          >
            <div
              className={`md:w-7 w-5 h-[2px] bg-white transition-transform duration-300 ease-in-out absolute ${
                isOpen
                  ? "rotate-45 translate-y-0"
                  : "md:-translate-y-[6px] translate-y-1"
              }`}
            />
            <div
              className={`md:w-7 w-5 h-[2px] bg-white transition-transform duration-300 ease-in-out absolute ${
                isOpen
                  ? "-rotate-45 translate-y-0"
                  : "md:translate-y-[6px] -translate-y-1"
              }`}
            />
          </button>
        </div>

        <div
          className={`h-screen w-screen bg-black absolute  duration-500 top-0 flex flex-col ${
            isOpen ? "left-0" : "-left-[100vw]"
          }`}
        >
          <div
            className={`w-screen h-full bg-black  flex flex-col justify-center items-center  `}
          >
            <div className="md:flex grid grid-cols-5 justify-center items-center flex-wrap md:gap-10 gap-4 md:w-[80%] w-[95%] md:h-[80%] pt-3 pb-8 mt-14  md:overflow-y-hidden overflow-y-scroll">
              {chapters?.map((item, index) => (
                <button
                  onClick={() => {
                    if (isLink) {
                      router.push(
                        `/greek/${chapters[index]?.name}?current=${index}`
                      );
                    } else if (setCurrent) {
                      setCurrent(index);
                    }
                    setIsOpen(false);
                  }}
                  key={index}
                  className={`flex flex-col justify-center  items-center gap-2 text-xs font-serif ${
                    current === index ||
                    decodeURIComponent(path) ===
                      `/greek/${chapters[index]?.name}`
                      ? "text-primary"
                      : "text-white/60"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`md:w-16 w-9 aspect-square rounded-full object-cover ${
                      (current === index ||
                        decodeURIComponent(path) ===
                          `/greek/${chapters[index]?.name}`) &&
                      "border-2 border-primary"
                    }`}
                  />
                  <span className="md:text-xs text-[xs] font-light">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
