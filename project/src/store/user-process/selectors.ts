import { State } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../utils/const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getEmail = (state: State): string => state[NameSpace.User].email;
