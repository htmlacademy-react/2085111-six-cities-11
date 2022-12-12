import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Comment } from '../types/comment';
import { Hotel } from '../types/hotel';
import { NewComment } from '../types/new-comment';
import { NewFavoriteOffer } from '../types/new-favorite-offer';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { APIRoute, AppRoute } from '../utils/const';
import { redirectToRoute } from './action';

export const fetchOffersAction = createAsyncThunk<Hotel[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Hotel[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk<Hotel[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/favoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Hotel[]>(APIRoute.Favorite);
    return data;
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<Hotel | null, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Hotel>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return null;
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<Comment[], number, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Hotel[], number, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, { extra: api }) => {
    const { data } = await api.get<Hotel[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const setFavoriteStatusAction = createAsyncThunk<number | void, NewFavoriteOffer, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFavoriteStatus',
  async ({ id, status }, { extra: api }) => {
    try {
      const { data } = await api.post<Hotel>(`${APIRoute.Favorite}/${String(id)}/${Number(status)}`);
      return data.id;
    } catch {
      toast.error('Error: cannot add offer to favorites');
    }
  },
);

export const postNewCommentAction = createAsyncThunk<Comment | null, NewComment, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/postNewComment',
  async ({ id, comment, rating }, { extra: api }) => {
    try {
      const { data } = await api.post<Comment[]>(`${APIRoute.Comments}/${String(id)}`, { comment, rating });
      const newComment = data.slice(-1)[0];
      toast.success('Your comment has been sent');
      return newComment;
    } catch {
      toast.error('Error: cannot post a new review');
      return null;
    }
  },
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<UserData>(APIRoute.Login);
    return response.data.email;
  });

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
    return email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
