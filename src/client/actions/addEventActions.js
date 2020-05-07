
import axios from 'axios';
import * as types from '../constants/actionTypes';

/**
 * Async request to add a new event
 */

export const addEventRequest = (data, leadId) => ({
  type: types.ADD_EVENT_REQUEST,
  payload: {...data, id: leadId },
});

export const addEventSuccess = () => {
  return ({
    type: types.ADD_EVENT_SUCCESS,
  });
};

export const addEventFailure = (error) => ({
  type: types.ADD_EVENT_FAILURE,
  payload: error,
});

export const addEventToStore = (newEvent) => ({
  type: types.ADD_EVENT,
  payload: newEvent,
});

/**
 * Form Data is from AddEvent component
 * Expects response.data.id
 */
export const addEvent = (data) => {
  // Expects data.id
  return (dispatch) => {
    dispatch(addEventRequest(data));
    axios.post('/postevent', data)
      .then((response) => {
        const { id } = response.data;
        const newLead = {
          id,
          ...data,
        };
        dispatch(addEventSuccess());
        dispatch(addEventToStore(newLead));
      })
      .catch((error) => {
        dispatch(addEventFailure(error.message));
      });
  };
};
