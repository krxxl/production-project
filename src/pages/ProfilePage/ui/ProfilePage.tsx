import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const defaultReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('about');
  return (
    <DynamicModuleLoader reducers={defaultReducers} removeAfterUnmount>
      <div>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
