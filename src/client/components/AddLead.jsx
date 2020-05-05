/*
 * For adding a new lead to the Table.
 */

import React from "react";
import { connect } from 'react-redux';
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
  const onSubmit = (data) => {
    console.log('button clicked');
    console.log(data);
    //this.props.updateAddLead(data);
  }

  return (
    <div id="addlead">
      <span className="title">New Lead</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>Company</InputLabel>
        <TextField name="company" fullWidth={true} inputRef={register({ required: true })} />
        <br/>
        <InputLabel>Position</InputLabel>
        <TextField name="position" fullWidth={true} inputRef={register({ required: true })} />
        <br/>
        <InputLabel>Link</InputLabel>
        <TextField name="link" fullWidth={true} inputRef={register({ required: true })} />
        <br/>
        <InputLabel>Resume</InputLabel>
        <TextField name="resume" fullWidth={true} inputRef={register({ required: true })} />
        <br/>
        <InputLabel>Cover Letter</InputLabel>
        <TextField name="cover letter" fullWidth={true} inputRef={register({ required: true })} />
        <br/>
        <InputLabel>Recruiter</InputLabel>
        <TextField name="recruiter" fullWidth={true} inputRef={register} />
        <br/>
        <InputLabel>Notes</InputLabel>
        <TextField
          name="notes"
          fullWidth={true}
          multiline
          rows="5"
          inputRef={register}
        />
        <input type="submit"/>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateAddLead: () => (dispatch(actions.updateAddLead())),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLead);
