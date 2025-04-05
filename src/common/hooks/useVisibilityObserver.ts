import { useEffect, useRef, useState } from "react";

export function useVisibilityObserver(threshold: number = 0) {
  const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const current = elementRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  return { isVisible, ref: elementRef };
}
