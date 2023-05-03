import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRoles } from '../../consts/consts';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRoles.ADMIN)),
);
export const isManager = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRoles.MANAGER)),
);
