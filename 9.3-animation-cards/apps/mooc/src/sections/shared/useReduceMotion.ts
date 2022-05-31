import { useEffect, useState } from "react";

export const useReduceMotion = (): boolean => {
  const [matches, setMatch] = useState(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setMatch(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return matches;
};
