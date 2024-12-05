"use client";
import React, { useEffect, useState } from "react";

const CircularCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseDown, setMousDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setMousDown(true);
    const handleMouseUp = () => setMousDown(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="border-2 p-2"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: mouseDown ? "white" : "transparent",
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px) scale(${
          mouseDown ? 1.5 : 1
        })`,
        transition: "transform 0.1s ease-out, background-color 0.5s",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CircularCursor;
