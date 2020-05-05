
import axios from 'axios';
import * as types from '../constants/actionTypes';

/**
 * Handle changes to the form
 */
export const updateAddLead = (data) => ({
  type: types.UPDATE_ADD_LEAD,
  payload: data,
});


/**
 * Async request to add to the table
 */

export const addLeadRequest = () => ({
  type: types.ADD_LEAD_REQUEST,
});

export const addLeadSuccess = (data) => {
  return ({
    type: types.ADD_LEAD_SUCCESS,
  });
};

export const addLeadFailure = (error) => ({
  type: types.ADD_LEAD_FAILURE,
  payload: error,
});

export const addLead = () => {
  return (dispatch, getState) => {
    const leadData = getState().addLead.data;
    dispatch(addLeadRequest());
    axios.post('/addlead', leadData)
      .then(response => {
        const data = response.data;
        dispatch(addLeadSuccess(data));
      })
      .catch(error => {
        dispatch(addLeadFailure(error.message));
      });
  };
};

