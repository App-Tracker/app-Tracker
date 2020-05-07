/**
 * Add a new event.
 */

import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../actions/addEventActions';
import { useHistory } from 'react-router-dom';

const AddEvent = ({ history, location, match }) => {
  const leadId = 1; //match.params.id
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data, leadId) => {
    dispatch(actions.addEvent(data, leadId));
  };

  const reminderOptions = [];
  reminderOptions.push(<option name="reminder_in" value="None">None</option>);
  for (let i = 1; i < 11; i += 1) {
    reminderOptions.push(<option name="reminder_in" value={i} key={uuidv4()}>{i}</option>);
  }

  const followupOptions = [];
  followupOptions.push(<option name="followup_after" value="None">None</option>);
  for (let i = 1; i < 11; i += 1) {
    followupOptions.push(<option name="followup_after" value={i} key={uuidv4()}>{i}</option>);
  }

  return (
    <div id="addevent">
      <span className="title">Add Event to Lead {leadId}</span>
      <form onSubmit={handleSubmit((data, leadId) => onSubmit(data, leadId))}>
        <select name="event_type" ref={register({ required: true })}>
          <option name="event_type" value="Networking">
            Networking
          </option>
          <option name="event_type" value="RecruiterCall">
            RecruiterCall
          </option>
          <option name="event_type" value="Screening">
            Screening
          </option>
          <option name="event_type" value="TechInterview">
            TechInterview
          </option>
          <option name="event_type" value="NonTechInterview">
            NonTechInterview
          </option>
        </select>
        <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
        <br />
        <TextField
          id="date"
          type="date"
          name="date"
          InputLabelProps={{ shrink: true }}
          inputRef={register({ required: true })}
        />
        <InputLabel>Date</InputLabel>
        <br />
        <select name="reminder_in" ref={register({ required: true })}>
          {reminderOptions}
        </select>
        <InputLabel>Reminder Before X Days</InputLabel>
        <br />
        <select name="followup_after" ref={register({ required: true })}>
          {reminderOptions}
        </select>
        <InputLabel>Followup After X Days</InputLabel>
        <br />
        <TextField name="notes" multiline rows="3" inputRef={register} />
        <InputLabel>Notes</InputLabel>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvent;
