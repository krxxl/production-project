import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer, ValidateProfileError,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const defaultReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('about');
  const dispatch = useAppDispatch();
  const profileForm = useSelector(getProfileForm);
  const profileError = useSelector(getProfileError);
  const profileValidateErrors = useSelector(getProfileValidateErrors);
  const profileIsLoading = useSelector(getProfileIsLoading);
  const profileReadonly = useSelector(getProfileReadonly);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const validateProfileErrorTranslate = {
    [ValidateProfileError.INCORRECT_PROFILE_DATA]: t('имя пользователя не должно быть пустым'),
    [ValidateProfileError.INCORRECT_PROFILE_AGE]: t('возраст должен быть корректным'),
    [ValidateProfileError.INCORRECT_PROFILE_CITY]: t('город не может быть пустым'),
    [ValidateProfileError.NO_DATA]: t('заполните форму'),
    [ValidateProfileError.SERVER_ERROR]: t('ошибка сервера'),
  };

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    if (!/[^\d]/g.test(value || '')) {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <div>
        <ProfilePageHeader />
        {profileValidateErrors?.length && (
          profileValidateErrors.map((err) => (
            <Text key={err} theme={TextTheme.ERROR} text={validateProfileErrorTranslate[err]} />
          ))
        )}
        <ProfileCard
          data={profileForm}
          isLoading={profileIsLoading}
          error={profileError}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          readonly={profileReadonly}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
