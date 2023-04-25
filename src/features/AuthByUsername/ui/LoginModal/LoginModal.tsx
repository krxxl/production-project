import { FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';
import { Spinner } from '@/shared/ui/Spinner/Spinner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal
    lazy
    isOpen={isOpen}
    onClose={onClose}
  >
    <Suspense fallback={<Spinner />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
