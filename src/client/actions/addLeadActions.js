
import axios from 'axios';
import * as types from '../constants/actionTypes';

/**
 * Async request to add a new lead
 */

export const addLeadRequest = (data) => ({
  type: types.ADD_LEAD_REQUEST,
  payload: data,
});

export const addLeadSuccess = () => {
  return ({
    type: types.ADD_LEAD_SUCCESS,
  });
};

export const addLeadFailure = (error) => ({
  type: types.ADD_LEAD_FAILURE,
  payload: error,
});

export const addLeadToStore = (newLead) => ({
  type: types.ADD_LEAD,
  payload: newLead,
});

/**
 * Form Data is from AppLead component
 * Expects response.data.id
 */
export const addLead = (data) => {
  // Expects data.id
  return (dispatch) => {
    dispatch(addLeadRequest(data));
    axios.post('/postlead', data)
      .then((response) => {
        const { id } = response.data;
        const newLead = {
          id,
          ...data,
        };
        dispatch(addLeadSuccess());
        dispatch(addLeadToStore(newLead));
      })
      .catch((error) => {
        dispatch(addLeadFailure(error.message));
      });
  };
};
