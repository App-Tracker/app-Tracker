/**
 * Container for table displayiong all leads.  Processes & passes data to the table.
 */
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import styled from 'styled-components';
import Table from './Table';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const AppTable = () => {
  const getRowProps = (gridState, rowProps) => (rowProps) || {};
  const columns = React.useMemo(
    () => [
      {
        Header: 'Leads',
        columns: [
          {
            Header: '',
            maxWidth: 90,
            accessor: 'functions',
            getProps: getRowProps,
          },
          {
            Header: 'Id',
            accessor: 'id',
          },
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
          }
        ],
      },
    ],
    []
  );

  /* To use once connected to DB */
// const leads = useSelector(state => [...state.data.leads]);
  const leads = [
    {
      id: 1,
      company: 'Google',
      link: 'google.com',
      position: 'backend',
      cv: 'v1',
      cl: 'v2',
      // events: [
      //   {
      //     event_type: 'Screening',
      //     date: '2015-05-01',
      //     reminder_in: 3,
      //     followup_after: 5
      //   },
      //   {
      //     event_type: 'TechInterview',
      //     date: '2015-05-14',
      //     reminder_in: 3,
      //     followup_after: 5
      //   }
      // ]
    },
    {
      id: 2,
      company: 'Facebook',
      link: 'facebook.com',
      position: 'backend',
      cv: 'v1',
      cl: 'v1',
      // events: [
      //   {
      //     event_id: 0,
      //     event_type: 'Screening',
      //     date: '2015-06-01',
      //     reminder_in: 3,
      //     followup_after: 2
      //   },
      //   {
      //     event_id: 1,
      //     event_type: 'TechInterview',
      //     date: '2015-06-14',
      //     reminder_in: 3,
      //     followup_after: 2
      //   }
      // ]
    },
  ];
  const data = useMemo(() => leads.map((lead) => ({
    functions: 'buttons',
    id: lead.id,
    company: lead.company,
    position: lead.position,
    cv: lead.cv,
    cl: lead.cl,
    recruiter: lead.recruiter,
    events: lead.events,
    reminder: lead.reminder,
  })), [leads]);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
};

export default AppTable;
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(Table);
