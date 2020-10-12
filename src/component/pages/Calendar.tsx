import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

/* FullCalender */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { NomalModal } from '../template/modal';

const Calendar = (): JSX.Element => {
  /* [dayGridPlugin, interactionPlugin]この制御するとエラーになる(時間ある時整形) */
  const [calendarPlugins, setCalendarPlugins] = useState([
    dayGridPlugin,
    interactionPlugin,
  ]);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const modalChild: JSX.Element = <div>modeal</div>;
  const openModal = () => {
    setModalStatus(true);
    console.log(1);
  };
  useEffect(() => {
    console.log('useEffect end');
  }, []);
  const openModalForAddEvent = (props: any) => {
    const date = props.dateStr;
    openModal();
    setEvents([]);
  };
  const [events, setEvents] = useState([{ title: 'ggg', date: '2020-10-07' }]);

  return (
    <>
      <NomalModal
        isOpen={modalStatus}
        onClick={openModal}
        closeModal={() => setModalStatus(false)}
      >
        <div>s</div>
      </NomalModal>
      <FullCalendar
        plugins={calendarPlugins}
        selectable
        selectMirror
        dateClick={info => {
          openModalForAddEvent(info);
          console.log(info);
        }}
        events={events}
        // eventClick={(info) => { editEvent(info) }}
      />
    </>
  );
};

export default withRouter(Calendar);
