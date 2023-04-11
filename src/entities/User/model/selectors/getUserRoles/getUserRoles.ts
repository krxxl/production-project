import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRoles } from '../../types/userSchema';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.ADMIN)));
export const isManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.MANAGER)));
