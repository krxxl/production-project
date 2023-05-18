import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (stars: number) => void;
  onConfirm?: (stars: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo(
  ({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onConfirm,
    rate = 0,
  }: RatingCardProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setSetStarsCount] = useState(rate);
    const [feedback, setfeedback] = useState('');

    const onSelectedStar = useCallback(
      (stars: number) => {
        setSetStarsCount(stars);
        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onConfirm?.(stars);
        }
      },
      [hasFeedback, onConfirm],
    );

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
        <Input
          data-testid="RatingCard.Input"
          value={feedback}
          onChange={onChangeFeedback}
          placeholder={t('Отзыв')}
        />
      </>
    );

    return (
      <Card
        data-testid="RatingCard"
        max
        className={classNames('', {}, [className])}
      >
        <VStack gap="16" max justify="center" align="center">
          {title && <Text title={starsCount > 0 ? t('Оценка') : title} />}
          <StarRating selectedStars={starsCount} onSelect={onSelectedStar} />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy onClose={onCancelHandler}>
            <VStack max gap="16">
              {modalContent}
              <HStack gap="16" max justify="end">
                <Button
                  onClick={onCancelHandler}
                  theme={ButtonTheme.OUTLINE_RED}
                >
                  {t('Отменить')}
                </Button>
                <Button
                  data-testid="RatingCard.Send"
                  onClick={onConfirmHandler}
                >
                  {t('Отправить')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} onClose={onCancelHandler}>
            <VStack max gap="16">
              {modalContent}
              <Button fullWidth onClick={onConfirmHandler}>
                {t('Отправить')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </Card>
    );
  },
);
