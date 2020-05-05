/**
 * Add a new event.
 */

import React from "react";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import * as actions from '../actions/addEventActions';
import NativeSelect from '@material-ui/core/NativeSelect';

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(actions.addEvent(data));
  };
  return (
    <div id="addevent">
      <span className="title">New Event</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NativeSelect
          inputProps={{
            name: 'event',
            id: 'event-native-helper',
          }}
          inputRef={register({ required: true })}
        >
          <option aria-label="None" value="" />
          <option value="Networking">Networking</option>
          <option value="Networking">Screening</option>
          <option value="TechnicalInterview">TechnicalInterview</option>
          <option value="NonTechnicalInterview">NonTechnicalInterview</option>
          <option value="TechnicalInterview">Onsight</option>
          <option value="NonTechnicalInterview">NonTechnicalInterview</option>
        </NativeSelect>
        <InputLabel>Event Type</InputLabel>

        <TextField
          id="date"
          type="date"
          InputLabelProps={{ shrink: true }}
          inputRef={register({ required: true })}
        />
        <InputLabel>Date</InputLabel>

        <TextField name="reminder_in" inputRef={register({ pattern: /([1-9][0-9]*)/ })} />
        <InputLabel>Reminder Before X Days</InputLabel>

        <TextField name="followup_after" inputRef={register({ pattern: /([1-9][0-9]*)/ })} />
        <InputLabel>Followup After X Days</InputLabel>

        <TextField
          name="notes"
          multiline
          rows="5"
          inputRef={register}
        />
        <InputLabel>Notes</InputLabel>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvent;
