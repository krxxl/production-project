import { TestAsyncThunk } from '@/shared/lib/testing/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { updateProfileData } from './updateProfileData';

const data = {
  first: 'wee',
  lastname: 'jbb',
  username: '123',
  city: 'sds',
  age: 23,
  avatar: 'sss',
};

describe('updateProfileData', () => {
  test('success updateProfileData', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetchArticleDetailData', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('error fetchArticleDetailData', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, age: 34.4 },
      },
    });

    const result = await thunk.callThunk();

    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_PROFILE_AGE]);
  });
});
