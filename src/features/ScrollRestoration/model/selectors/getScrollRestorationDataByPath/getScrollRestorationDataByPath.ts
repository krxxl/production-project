import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getScrollRestorationData,
} from '../getScrollRestorationData/getScrollRestorationData';

export const getScrollRestorationDataByPath = createSelector(
  getScrollRestorationData,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
