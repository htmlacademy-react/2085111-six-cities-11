import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import { commentsProcess } from './comments-process/comments-process';
import { offersProcess } from './offers-process/offers-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
});
