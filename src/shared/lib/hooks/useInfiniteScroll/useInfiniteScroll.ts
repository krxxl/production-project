import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  cb?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}
export function useInfiniteScroll({ triggerRef, wrapperRef, cb }: UseInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (cb) {
      const options = {
        root: wrapperElement,
        rootMargin: '20px 20px 20px 45px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          cb();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [cb, triggerRef, wrapperRef]);
}
