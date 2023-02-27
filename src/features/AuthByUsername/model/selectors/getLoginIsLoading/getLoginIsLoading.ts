import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/LoginSchema';
import { getLogin } from '../getLogin/getLogin';

export const getLoginIsLoading = createSelector(
  getLogin,
  (login: LoginSchema) => login?.isLoading || false,
);
