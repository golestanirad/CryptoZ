import { useRef, useState, useEffect } from "react";

export const useScroll = () => {
  const ref = useRef<any>();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const listRef = ref.current;
    listRef.addEventListener("scroll", handleListenToScroll);

    return () => listRef.removeEventListener("scroll", handleListenToScroll);
  }, []);

  const handleListenToScroll = () => {
    const winScroll = ref.current.scrollTop;

    if (winScroll > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return { ref, isScrolled };
};
