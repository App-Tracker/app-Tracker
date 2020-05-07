/**
 * Table displaying all leads.
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table';

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id="table">Table</div>;
  }
}

// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
// `;

// const Table = ({ columns, data }) => {
//   // Use the state and functions returned from useTable to build your UI
//   const {
//     getTableBodyProps,
//     getTableProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({
//     columns,
//     data,
//   });

//   // Render the UI for your table
//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row, i) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// const AppTable = () => {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Application',
//         columns: [
//           {
//             Header: 'Company',
//             accessor: 'company',
//           },
//           {
//             Header: 'Position',
//             accessor: 'position',
//           },
//           {
//             Header: 'CV',
//             accessor: 'cv',
//           },
//           {
//             Header: 'CL',
//             accessor: 'cl',
//           },
//           {
//             Header: 'Link',
//             accessor: 'link',
//           },
//           {
//             Header: 'Recruiter',
//             accessor: 'recruiter',
//           },
//           {
//             Header: 'Events',
//             accessor: 'events',
//           },
//           {
//             Header: 'Reminder',
//             accessor: 'reminder',
//           },
//         ],
//       },
//     ],
//     []
//   );

//   const data = React.useMemo(() => makeData(20), []);

//   return (
//     <Styles>
//       <Table columns={columns} data={data} />
//     </Styles>
//   );
// };

// export default Table;
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
