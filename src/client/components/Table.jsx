/* eslint-disable react/jsx-props-no-spreading */

/**
 * Table displaying all leads.
 */
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  visibleColumns,
  state,
  useGlobalFilter,
  preGlobalFilteredRows,
  setGlobalFilter,
} from 'react-table';

/**
 * AppTable feeds props to Table.
 */

const Table = ({ columns, data }) => {
  /**
   * UI for column filter.
   */
  const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => {
    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search`}
      />
    );
  };

  /**
   * Sets default definitions for columns, to enable DefaultColumnFilter to all columns.
   */
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );

  /**
   * Set filterTypes to be passed into useTable. Currently we only have text filter.
   */
  const filterTypes = useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    [],
  );
  
  const history = useHistory();
  const handleAddEventClick = (id) => {
    history.push(`/addEvent/${id}`);
  }

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useSortBy,
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "▽" : "△") : ""}
                </span>
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row); // adds getRowProps to row.
          return (
            <tr {...row.getRowProps()}>
              {/* renders each cell within the row*/}
              {row.cells.map((cell) => {
                if (cell.column.id === "events") {
                  return (
                    <td {...cell.getCellProps()}>
                      <ul>
                        {cell.row.original.events.map((e) => <li key={uuidv4()}>{e.event_type} ({e.date})</li>)}
                      </ul>
                      <span><button onClick={() => handleAddEventClick(cell.row.original.id)}>Add Event to Lead {cell.row.original.id}</button></span>
                    </td>
                  );
                }
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
