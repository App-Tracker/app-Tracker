/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Switch } from 'react-router-dom';
import { fetchData } from '../actions/dataActions';
import LogIn from './LogIn';
import Table from './Table';
import AddLead from './AddLead';


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchData();
    console.log(this.props.data);
  }
  render() {
    return (
      <div id="app">
        <LogIn/>
        <AddLead/>
        <Table/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
