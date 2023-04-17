import { FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Loader } from '@/widgets/Loader';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';

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
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
