"use client";
import { usePathname } from "next/navigation";
import ChapterLayout from "@/components/layout/ChapterLayout";
import Section from "@/components/layout/Section";
import { useMythData } from "@/hooks/useMythData";
import { Myth as MythType, Sec } from "../../../../types";
import { Myth } from "@/app/home";

const ChapterPage = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);
  const mythName = pathSegments[0];
  const chapterName = pathSegments[1];

  const { chapterData } = useMythData({
    mythName: mythName,
    chapterName: chapterName,
  });
  const icon: MythType | undefined = Myth?.find(
    (item) => item.name === mythName
  );
  return (
    <>
      {chapterData && (
        <ChapterLayout chapter={chapterData} icon={icon?.icon}>
          {chapterData &&
            chapterData.sections?.map((section: Sec, index) => (
              <Section
                reverse={index % 2 === 0}
                key={index}
                h={section.h}
                p={section.p}
                img={section.img}
              />
            ))}
        </ChapterLayout>
      )}
    </>
  );
};

export default ChapterPage;
