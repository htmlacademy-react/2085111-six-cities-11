import { createSlice } from '@reduxjs/toolkit';
import { CommentsProcess } from '../../types/state';
import { NameSpace } from '../../utils/const';
import { fetchCommentsAction, postNewCommentAction } from '../api-actions';

const initialState: CommentsProcess = {
  currentComments: [],
  isPostingLoading: false,
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.currentComments = action.payload;
      })
      .addCase(postNewCommentAction.pending, (state) => {
        state.isPostingLoading = true;
      })
      .addCase(postNewCommentAction.fulfilled, (state, action) => {
        state.isPostingLoading = false;
        if (action.payload) {
          state.currentComments = state.currentComments.concat(action.payload);
        }
      })
      .addCase(postNewCommentAction.rejected, (state) => {
        state.isPostingLoading = false;
      });
  }
});
