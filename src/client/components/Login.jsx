
import React from "react";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

const LogIn = () => {
  const {
    handleSubmit,
    errors,
  } = useForm();

  return (
    <div id='login'>
        Login
    </div>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);