import { useEffect, useRef } from 'react';

const useObserver = (callback: () => void) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) callback();
      },
      {
        threshold: 1,
      },
    );
    observerRef.current && observer.observe(observerRef.current);

    return () => {
      observerRef.current && observer.unobserve(observerRef.current);
    };
  }, [observerRef.current]);

  return observerRef;
};

export default useObserver;
