import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../types/profileSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  // женерики 1. что получаем, 2. что передаем (в данном случае ничего) 3. дженерик для апи, диспатча и для ошибки
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {
      dispatch, rejectWithValue, extra, getState,
    } = thunkAPI;

    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }
    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (err) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
