/**
 * Container for table displayiong all leads.  Processes & passes data to the table.
 */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import Table from './Table';

/**
 * Styles used for AppTable.
 */
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

/**
 * AppTable calls the Table passing in columns and data.
 */
const AppTable = () => {
  const getRowProps = (gridState, rowProps) => (rowProps) || {};
  const columns = React.useMemo(
    () => [
      {
        Header: 'Leads',
        columns: [
          {
            Header: (props) => {
              console.log(props);
              return 'Company';
            },
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
            Header: 'lastEventDate',
            accessor: 'lastEventDate'
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
  /**
   * Parses events arry and returns a reminder for the latest event to include in the "reminder" column.
   * Reminder for a follow-up lasts for max 10 days after the event.
   */
  const reminderGenerator = (events) => {
    // if lastEvent < today, 
    const event = events[events.length-1];
    const eventDate = new Date(event.date);
    const today = Date.now()
    if (eventDate >= today) {
      if (event.reminder_in === "None") {
        return;
      }
      const dateDiff = parseInt((eventDate - today)/(1000*60*60*24));
      if (dateDiff <= event.reminder_in) {
        return `${event.event_type} in ${dateDiff} days`;
      }
    }
    if (eventDate < today) {
      if (event.followup_after === "None") {
        return;
      }
      const dateDiff = parseInt((today - eventDate) / (1000*60*60*24));
      if (dateDiff >= event.followup_after && dateDiff < 10) {
        return `Follow up for ${event.event_type} (${dateDiff} days passed)`
      }
    }
    return;
  };

  /**
   * Leads are from the store. Lead is initially fetched by GET request then updated incrementally upon successful POST or PUT requests.
   * We process leads to generate data that will be displayed in Table.
   * Each time lead is updated, data is also updated.
   */
  // const leads = useSelector(state => [...state.data.leads]);  <== to use once server endpoint available
  const leads = [
    {
      id: 1,
      company: 'Google',
      link: 'google.com',
      position: 'backend',
      cv: 'v1',
      cl: 'v2',
      events: [
        {
          event_type: 'Screening',
          date: '2020-05-01',
          reminder_in: 3,
          followup_after: 5,
          notes: null,
        },
        {
          event_type: 'TechInterview',
          date: '2020-05-04',
          reminder_in: 3,
          followup_after: 2,
          notes: null,
        }
      ]
    },
    {
      id: 2,
      company: 'Facebook',
      link: 'facebook.com',
      position: 'backend',
      cv: 'v1',
      cl: 'v1',
      events: [
        {
          event_id: 0,
          event_type: 'Screening',
          date: '2020-05-01',
          reminder_in: 3,
          followup_after: 2
        },
        {
          event_id: 1,
          event_type: 'TechInterview',
          date: '2015-05-14',
          reminder_in: 3,
          followup_after: 2
        }
      ]
    },
    {
      id: 3,
      company: 'Apple',
      link: 'apple.com',
      position: 'backend',
      cv: 'v1',
      cl: 'v2',
      events: [
        {
          event_id: 0,
          event_type: 'Screening',
          date: '2020-05-02',
          reminder_in: 3,
          followup_after: 2
        },
        {
          event_id: 1,
          event_type: 'TechInterview',
          date: '2015-05-14',
          reminder_in: 3,
          followup_after: 4
        }
      ]
    },
  ];
  const data = useMemo(() => leads.map((lead) => ({
    id: lead.id,
    company: lead.company,
    position: lead.position,
    cv: lead.cv,
    cl: lead.cl,
    recruiter: lead.recruiter,
    events: lead.events,
    lastEventDate: lead.events[lead.events.length - 1].date, // assumes last event will be sent in last last
    reminder: reminderGenerator(lead.events),
  })), [leads]);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
};

export default AppTable;
