import React from "react";
import { motion } from "framer-motion";
import { buttonAnimation } from "./Animations";

export default function Button({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      {...buttonAnimation}
      onClick={onClick}
      className={` h-10 border-2  border-white/40 hover:border-primary hover:bg-primary rounded-full relative group overflow-hidden duration-700 z-10 ${className}`}
    >
      <span className="h-full w-full rounded-full absolute bg-primary -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 -left-1/2 group-hover:left-1/2 duration-300 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {title}
      </span>
    </motion.button>
  );
}
