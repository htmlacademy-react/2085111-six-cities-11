import { Comment } from '../../types/comment';
import { State } from '../../types/state';
import { NameSpace } from '../../utils/const';

export const getComments = (state: State): Comment[] => state[NameSpace.Comments].currentComments;
export const getPostingStatus = (state: State): boolean => state[NameSpace.Comments].isPostingLoading;
