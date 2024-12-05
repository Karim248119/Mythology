import React, { useRef } from "react";
import { Myth } from ".";
import ReversedCard from "@/components/cards/ReversedCard";
import Nav from "@/components/Nav";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { h1Animation, h2Animation, pAnimation } from "@/components/Animations";

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-screen ">
      <Nav />
      <div className=" w-screen h-screen">
        <img
          src="https://static.vecteezy.com/system/resources/previews/036/260/239/non_2x/ai-generated-antique-statue-isolated-on-transparent-background-free-png.png"
          className="fixed right-0 bottom-0 h-screen grayscale -z-20 scale-x-[-1] hidden md:block"
          alt=""
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/049/667/622/non_2x/marble-statue-of-a-man-pointing-upward-dressed-in-a-flowing-robe-with-a-transparent-background-png.png"
          className="fixed right-0 object-cover h-[90vh] bottom-0 grayscale -z-20 scale-x-[-1] md:hidden"
          alt=""
        />
        <div className="fixed right-0 top-0 flex flex-col md:flex-row w-full h-screen bg-black/70  ">
          <div className="w-[40vw] h-screen md:flex justify-center items-center p-20 relative hidden">
            <motion.div
              {...h2Animation}
              className="w-full h-full rounded-t-full border border-r-0 border-primary"
            />
            <motion.img
              {...h2Animation}
              src="https://static.vecteezy.com/system/resources/previews/038/038/849/non_2x/ai-generated-gypsum-statue-plaster-copy-isolated-on-transparent-background-free-png.png"
              alt=""
              className="h-[90vh] md:object-cover grayscale filter absolute bottom-0"
            />
          </div>
          <div className="md:w-[60vw] w-full h-screen flex flex-col gap-14 justify-center z-10  p-5">
            <motion.h1
              {...h1Animation}
              className="md:text-6xl text-4xl capitalize tracking-wider text-primary"
            >
              Mythology
            </motion.h1>
            <div className="flex md:gap-5 gap-1 items-start">
              <motion.div
                {...h2Animation}
                className="h-[1px] md:w-16 w-8 bg-primary md:-ml-8"
              />
              <div className="flex flex-col gap-20 -mt-3">
                <motion.p
                  {...pAnimation}
                  className="text-white/50 md:w-[30vw] w-[80vw] font-light md:text-base text-sm"
                >
                  Explore the stories of ancients and dive into the rich
                  heritage passed down through generations. Discover myths that
                  shaped the world we know today.
                </motion.p>
                <Button
                  title="Start now"
                  className="md:w-[20vw] w-[60vw] "
                  onClick={handleScroll}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={targetRef}
        id="target"
        className="flex justify-center items-center flex-wrap md:p-20 md:pt-32 pt-24 md:gap-y-36 gap-y-28 gap-x-24 bg-black absolute z-20 "
      >
        {Myth.map((item, index) => (
          <ReversedCard key={index} myth={item} index={index} />
        ))}
      </div>
    </div>
  );
}
