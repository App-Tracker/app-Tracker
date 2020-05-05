/**
 * Table displaying all leads.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table';

// class Table extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <div id="table">Table</div>;
//   }
// }

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const AppTable = () => {
  const columns = React.useMemo(() => [
    {
      Header: 'Application',
      columns: [
        {
          Header: 'Company',
          accessor: 'company',
        },
        {
          Header: 'Position',
          accessor: 'position',
        },
        {
          Header: 'CV',
          accessor: 'cv',
        },
        {
          Header: 'CL',
          accessor: 'cl',
        },
        {
          Header: 'Link',
          accessor: 'link',
        },
        {
          Header: 'Recruiter',
          accessor: 'recruiter',
        },
        {
          Header: 'Events',
          accessor: 'events',
        },
        {
          Header: 'Reminder',
          accessor: 'reminder',
        },
      ],
    },
  ], []);

  const data = React.useMemo(() => makeData(20), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
