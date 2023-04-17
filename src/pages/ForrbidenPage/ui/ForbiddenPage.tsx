import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = memo(() => {
  const { t } = useTranslation('about');
  return (
    <Page>
      {t('Нечего тут делать!!')}
    </Page>
  );
});

export default ForbiddenPage;
