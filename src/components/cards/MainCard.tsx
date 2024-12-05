import React from "react";

export default function MainCard({ className }: { className?: string }) {
  return (
    <button className={`md:h-[70vh] md:w-80 w-60 h-80  relative ${className}`}>
      <img
        src="https://www.in2greece.com/english/historymyth/mythology/wp-content/uploads/2024/05/creation-of-the-world-1.jpg"
        alt="zeus"
        className="h-full w-full object-cover rounded-tl-[100px] rounded-br-[100px] filter grayscale"
      />
      <div className="w-full h-full text-start px-10 rounded-tl-[100px] rounded-br-[100px] bg-black/30 z-10 center flex flex-col gap-3 justify-center">
        <h1 className="mt-10 text-2xl">Sumerian</h1>
        <p className="text-sm text-white/70"></p>
      </div>
      <div className="h-8 w-8 border absolute right-0 top-1/2 -translate-y-1/2 bg-primary flex justify-center items-center rotate-45 z-30">
        ↗
      </div>
      <div className="w-[90%] h-[90%] rounded-tl-[90px] rounded-br-[90px] border-white/30 border center z-20 " />
      <div className="w-[100%] h-[20%] rounded-tl-[100px] rounded-br-[100px] border-l border-b absolute left-0 md:-top-2 md:-left-3 top-3 z-20 border-primary" />
      <div className="w-full flex items-center gap-3 absolute left-0 md:-top-10 -top-5 z-20 ">
        <span className="w-[80%] h-[1px] bg-gradient-to-r from-black to-primary" />
        <span className={`"text-primary italic scale-x-[-1]"`}>01 .</span>
      </div>
      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-violet-500 absolute -bottom-5 -right-5 rounded-br-[110px] rounded-tl-[110px] -z-10" />
    </button>
  );
}
