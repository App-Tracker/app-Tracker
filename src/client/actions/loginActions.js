import * as types from '../constants/actionTypes';

export const updateLogin = (login) => ({
  type: types.UPDATE_LOGIN,
  payload: login,
});

export const updateUsername = (username) => ({
  type: types.UPDATE_USERNAME,
  payload: username,
});

export const updatePassword = (password) => ({
  type: types.UPDATE_PASSWORD,
  payload: password,
});
