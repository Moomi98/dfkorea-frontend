import { useState, useEffect } from "react";

export default function useWindowSize(): boolean {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize <= 600;
}
