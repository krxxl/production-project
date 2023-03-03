import React, {
  FC, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string,
  isOpen?: boolean,
  onClose?: () => void,
  lazy?: boolean
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}) => {
  const TIMEOUT = 300;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onCloseHandler = useCallback(() => {
    setIsClosing(true);
    if (onClose) {
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, TIMEOUT);
    }
  }, [onClose]);

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  }, [onCloseHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKey);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onKey]);

  const onContentHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div onClick={onCloseHandler} className={cls.overlay}>
          <div onClick={onContentHandler} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};
