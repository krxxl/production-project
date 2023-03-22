import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sendCommnet } from 'features/addCommentForm/model/services/sendComment/sendCommnet';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
  error: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(sendCommnet.pending, (state) => {
  //       state.error = undefined;
  //     })
  //     .addCase(sendCommnet.fulfilled, (state) => {
  //       state.text = '';
  //     })
  //     .addCase(sendCommnet.rejected, (state, action) => {
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
