// @ts-ignore
import React, {
  ReactNode, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string,
  isOpen?: boolean,
  onClose?: () => void,
  lazy?: boolean,
  children: ReactNode,
}

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: ModalProps) => {
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

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={onCloseHandler} />
        <div className={cls.content}>
          {children}
        </div>

      </div>
    </Portal>

  );
};
