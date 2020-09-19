import React, { useEffect, useContext, useState } from 'react';
import { withRouter } from 'react-router';

/* FullCalender */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

const Calendar = (): JSX.Element => {
  /* [dayGridPlugin, interactionPlugin]この制御するとエラーになる(時間ある時整形) */
  const [calendarPlugins, setCalendarPlugins] = React.useState([
    dayGridPlugin,
    interactionPlugin,
  ]);

  useEffect(() => {
    console.log('useEffect end');
  }, []);

  return (
    <FullCalendar
      plugins={calendarPlugins}
      selectable
      selectMirror
      dateClick={info => {
        console.log(info);
      }}
      // eventClick={(info) => { editEvent(info) }}
    />
  );
};

export default withRouter(Calendar);
