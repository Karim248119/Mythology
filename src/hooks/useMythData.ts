import { Chapter, Mythology } from "./../../types/index";
import { useState, useEffect } from "react";
import { getAllMythologies } from "../../api/mythologies";

export const useMythData = ({
  mythName,
  chapterName,
}: {
  mythName?: string;
  chapterName?: string | null;
}) => {
  const [mythData, setMythData] = useState<Mythology | null>(null);
  const [chapterData, setChapterData] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMythologies(mythName);
        setMythData(data || null);
      } catch (err) {
        setError("Failed to fetch Greek mythology data.");
      } finally {
        setLoading(false);
      }
    };
    console.log("mythData:", chapterName);

    fetchData();
  }, [mythName]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMythologies(mythName, chapterName);
        setChapterData(data || null);
      } catch (err) {
        setError("Failed to fetch Greek mythology data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [mythName, chapterName]);

  return { mythData, chapterData, loading, error };
};
