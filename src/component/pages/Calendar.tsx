import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

/* FullCalender */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { Button, Input, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { NomalModal } from '../template/modal';
import {
  postEvent,
  getNextEventID,
  getAllEventByAPI,
} from '../../services/backendAPI/event';
import { useAddEventForm } from '../../hooks/useAddEventForm';
import { ConbineState } from '../../reducer/index';
import { getAllEvent } from '../../actionCreaters/event';

export interface PreEvents {
  events: {
    id: number;
    title: string;
    date: string;
    backgroundColor: string;
    borderColor: string;
    textColor: string;
  }[];
  nextEventID: number;
}
// props制御する
const Calendar = (p: any): JSX.Element => {
  /* [dayGridPlugin, interactionPlugin]この制御するとエラーになる(時間ある時整形) */
  const [calendarPlugins, setCalendarPlugins] = useState([
    dayGridPlugin,
    interactionPlugin,
  ]);
  const {
    date,
    handleDate,
    content,
    handleContent,
    submitAddEvent,
    nextEventID,
    handleNextEventID,
  } = useAddEventForm();
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const calendarEvents = useSelector(
    (state: ConbineState) => state.calendarEvents,
  );
  const dispatch = useDispatch();
  const openModal = () => {
    setModalStatus(true);
  };
  useEffect(() => {
    (async () => {
      const datas = await getAllEventByAPI();
      handleNextEventID(datas.NextEventID);
      dispatch(getAllEvent.start());
    })();
  }, []);
  const openModalForAddEvent = (props: any) => {
    handleDate(props.dateStr);
    openModal();
  };

  return (
    <>
      <NomalModal
        isOpen={modalStatus}
        onClick={openModal}
        closeModal={() => setModalStatus(false)}
        title="予定を追加"
      >
        <Form.Field>
          <Input
            value={content}
            onChange={e => handleContent(e.target.value)}
          />
          <Button onClick={(e: any) => submitAddEvent()}>Submit</Button>
        </Form.Field>
      </NomalModal>
      <FullCalendar
        plugins={calendarPlugins}
        selectable
        selectMirror
        dateClick={info => {
          openModalForAddEvent(info);
          console.log(info);
        }}
        events={calendarEvents.events}
        // eventClick={(info) => { editEvent(info) }}
      />
    </>
  );
};

export default withRouter(Calendar);
