/*
 * For adding a new lead to the Table.
 */

import React from "react";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import * as actions from '../actions/addLeadActions';

const AddLead = () => {
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(actions.addLead(data));
  }
  return (
    <div id="addlead">
      <span className="title">New Lead</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="company" fullWidth={true} inputRef={register({ required: true })} />
        <InputLabel>Company</InputLabel>

        <TextField name="position" fullWidth={true} inputRef={register({ required: true })} />
        <InputLabel>Position</InputLabel>

        <TextField name="link" fullWidth={true} inputRef={register({ required: true })} />
        <InputLabel>Link</InputLabel>

        <TextField name="resume" fullWidth={true} inputRef={register} />
        <InputLabel>Resume</InputLabel>

        <TextField name="cover letter" fullWidth={true} inputRef={register} />
        <InputLabel>Cover Letter</InputLabel>

        <TextField name="recruiter" fullWidth={true} inputRef={register} />
        <InputLabel>Recruiter</InputLabel>

        <TextField
          name="notes"
          fullWidth={true}
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

export default AddLead;
