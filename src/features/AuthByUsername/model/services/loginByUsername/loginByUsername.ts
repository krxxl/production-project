import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (userData, thunkAPI) => {
  const { dispatch, rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.post('/login', userData);

    if (!response.data) {
      throw new Error();
    }
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (err) {
    return rejectWithValue('error');
  }
});
