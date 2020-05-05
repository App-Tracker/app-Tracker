/*
 * For adding a new lead to the Table.
 */
import React from "react";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

const AddLead = () => {
  const {
    handleSubmit,
    errors,
  } = useForm();

  return (
    <div id='addlead'>
      AddLead
      <form>
        <input name=""/>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddLead);
