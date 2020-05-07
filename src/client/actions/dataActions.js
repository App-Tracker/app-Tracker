/**
 * Async request for getting all info based on the userId.
 * Called once when App mounts.
 */

/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as types from '../constants/actionTypes';

export const fetchDataRequest = () => ({
  type: types.FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: types.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: types.FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get('https://jsonplaceholder.typicode.com/users') // to change to endpoint
      .then((response) => {
        const { data } = response;
        console.log('fetchData result', data);
        dispatch(fetchDataSuccess(data)); // array of objects
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
