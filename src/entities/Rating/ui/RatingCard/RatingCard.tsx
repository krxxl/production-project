import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
  className?: string,
  title?: string,
  feedbackTitle?: string,
  hasFeedback?: boolean,
  onCancel?: (stars: number) => void,
  onConfirm?: (stars: number, feedback?: string) => void,
}

export const RatingCard = memo(({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onCancel,
  onConfirm,
}: RatingCardProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setSetStarsCount] = useState(0);
  const [feedback, setfeedback] = useState('');

  const onSelectedStar = useCallback((stars: number) => {
    setSetStarsCount(stars);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onConfirm?.(stars);
    }
  }, [hasFeedback, onConfirm]);

  const onConfirmHandler = useCallback(() => {
    onConfirm?.(starsCount, feedback);
    setIsModalOpen(false);
  }, [feedback, onConfirm, starsCount]);

  const onCancelHandler = useCallback(() => {
    onCancel?.(starsCount);
    setIsModalOpen(false);
  }, [onCancel, starsCount]);

  const onChangeFeedback = useCallback((value: string) => {
    setfeedback(value);
  }, []);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={onChangeFeedback} placeholder={t('Отзыв')} />
    </>
  );

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack gap="16" max justify="center" align="center">
        {title && <Text title={title} />}
        <StarRating onSelect={onSelectedStar} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy onClose={onCancelHandler}>
          <VStack max gap="16">
            {modalContent}
            <HStack gap="16" max justify="end">
              <Button onClick={onCancelHandler} theme={ButtonTheme.OUTLINE_RED}>{t('Отменить')}</Button>
              <Button onClick={onConfirmHandler}>{t('Отправить')}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={onCancelHandler}>
          <VStack max gap="16">
            {modalContent}
            <Button fullWidth onClick={onConfirmHandler}>{t('Отправить')}</Button>
          </VStack>
        </Drawer>
      </MobileView>

    </Card>
  );
});
