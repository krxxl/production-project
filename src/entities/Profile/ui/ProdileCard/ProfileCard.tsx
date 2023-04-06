import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'widgets/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profileSchema';

interface ProfileCardProps {
  className?: string,
  data?: Profile;
  error?: string;

  isLoading?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCountry?: (country: Country) => void;
  onChangeCurrency?: (currency: Currency) => void;
  readonly?: boolean;
}

export const ProfileCard = memo(({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency,
  readonly,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        max
        justify="center"
        align="center"
        className={classNames(cls.ProfileCard, {}, [className, cls.isLoading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack max justify="center" align="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          align={TextAlign.CENTER}
          title={t('Что-то пошло не так')}
          text={t('Попробуйте чуть позже')}
          theme={TextTheme.ERROR}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack max justify="center">
          <Avatar src={data?.avatar} alt="аватар" size={100} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваше фамилия')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Ваш город')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Ваш аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Ваше имя пользователя')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
    </VStack>
  );
});
