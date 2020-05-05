/**
 * Table displaying all leads.
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id="table">Table</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
