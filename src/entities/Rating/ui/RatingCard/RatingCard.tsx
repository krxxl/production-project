import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <>
            <Text title={feedbackTitle} />
            <Input
              data-testid="RatingCard.Input"
              value={feedback}
              onChange={onChangeFeedback}
              placeholder={t('Ваш отзыв')}
            />
          </>
        }
        off={
          <>
            <TextDeprecated title={feedbackTitle} />
            <InputDeprecated
              data-testid="RatingCard.Input"
              value={feedback}
              onChange={onChangeFeedback}
              placeholder={t('Отзыв')}
            />
          </>
        }
      />
    );

    return (
      <Card
        data-testid="RatingCard"
        max
        className={classNames('', {}, [className])}
      >
        <VStack gap="16" max justify="center" align="center">
          {title && (
            <ToggleFeatures
              feature="isAppRedesigned"
              on={<Text title={starsCount ? t('Спасибо за оценку!') : title} />}
              off={
                <TextDeprecated title={starsCount > 0 ? t('Оценка') : title} />
              }
            />
          )}
          <StarRating selectedStars={starsCount} onSelect={onSelectedStar} />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy onClose={onCancelHandler}>
            <VStack max gap="16">
              {modalContent}
              <ToggleFeatures
                feature="isAppRedesigned"
                on={
                  <HStack max gap="16" justify="end">
                    <Button
                      data-testid="RatingCard.Close"
                      onClick={onCancelHandler}
                    >
                      {t('Закрыть')}
                    </Button>
                    <Button
                      data-testid="RatingCard.Send"
                      onClick={onConfirmHandler}
                    >
                      {t('Отправить')}
                    </Button>
                  </HStack>
                }
                off={
                  <HStack gap="16" max justify="end">
                    <ButtonDeprecated
                      onClick={onCancelHandler}
                      theme={ButtonTheme.OUTLINE_RED}
                    >
                      {t('Отменить')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      data-testid="RatingCard.Send"
                      onClick={onConfirmHandler}
                    >
                      {t('Отправить')}
                    </ButtonDeprecated>
                  </HStack>
                }
              />
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} onClose={onCancelHandler}>
            <VStack max gap="16">
              {modalContent}
              <ToggleFeatures
                feature="isAppRedesigned"
                on={
                  <Button fullWidth onClick={onConfirmHandler} size="l">
                    {t('Отправить')}
                  </Button>
                }
                off={
                  <ButtonDeprecated fullWidth onClick={onConfirmHandler}>
                    {t('Отправить')}
                  </ButtonDeprecated>
                }
              />
            </VStack>
          </Drawer>
        </MobileView>
      </Card>
    );
  },
);
