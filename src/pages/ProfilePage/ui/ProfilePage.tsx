import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const ProfilePage = memo(() => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('about');

  if (!id) {
    return <Text title={t('Что-то пошло не так')} />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>

  );
});

export default ProfilePage;
