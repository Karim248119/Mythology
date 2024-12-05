"use client";
import Slider from "@/components/sliders/Slider";
import { useMythData } from "@/hooks/useMythData";
import { usePathname } from "next/navigation";
import React from "react";

export default function MyhologyPage() {
  const pathname = usePathname();
  const mythName = pathname.split("/").pop();

  const { mythData } = useMythData({ mythName: mythName });

  const chapters = mythData?.chapters || [];

  return (
    <>
      <Slider chapters={chapters} mythName={mythName} />
    </>
  );
}
