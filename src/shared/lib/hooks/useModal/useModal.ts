import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface UseModal {
  timeOut?: number;
  onClose?: () => void;
  isOpen?: boolean;
}
export const useModal = ({ timeOut, onClose, isOpen }: UseModal) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    setIsClosing(true);
    if (onClose) {
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, timeOut);
    }
  }, [timeOut, onClose]);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKey);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onKey]);

  return {
    close,
    isClosing,
    isMounted,
  };
};
