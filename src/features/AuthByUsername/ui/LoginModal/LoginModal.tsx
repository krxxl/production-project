import { Suspense } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';
import { Spinner } from '@/shared/ui/deprecated/Spinner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal lazy isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<Spinner />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
