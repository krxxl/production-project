import { JsonSettings } from '../types/jsonSettings';
import { StateSchema } from '@/app/providers/StoreProvider';

const defaultJsonSettings: JsonSettings = {};

export const getJsonSettings = (state: StateSchema) =>
  state.user.authData?.jsonSettings ?? defaultJsonSettings;
