import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

/* FullCalender */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/daygrid/main.css';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { Input, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { NomalModal } from '../template/modal';

import {
  postEvent,
  getNextEventID,
  getAllEventByAPI,
} from '../../services/backendAPI/event';
import { useAddEventForm } from '../../hooks/useAddEventForm';
import { ConbineState } from '../../reducer/index';
import { getAllEvent, addEvents } from '../../actionCreaters/event';
import { LoadingScreen } from '../organisms/Loading';

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
    addedEventForCliant,
    newEvent,
  } = useAddEventForm();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [editEventModalStatus, setEditEventModalStatus] = useState<boolean>(
    false,
  );
  const [onClickedDate, setOnClickedDate] = useState<string>('');
  const calendarEvents = useSelector(
    (state: ConbineState) => state.calendarEvents,
  );
  const dispatch = useDispatch();
  const openModal = () => {
    setModalStatus(true);
  };
  const openEditEventModal = () => {
    setEditEventModalStatus(true);
  };
  useEffect(() => {
    (async () => {
      const datas = await getAllEventByAPI();
      handleNextEventID(datas.NextEventID);
      dispatch(getAllEvent.start());
    })();
    setIsLoading(false);
  }, []);

  const openModalForAddEvent = (props: any) => {
    setOnClickedDate(props.dateStr);
    handleDate(props.dateStr);
    setModalStatus(true);
  };
  const openModalForEditEvent = (info: any) => {
    console.log(info.event.id);
    setEditEventModalStatus(true);
  };

  return (
    <>
      {isLoading || calendarEvents.isLoading ? <LoadingScreen /> : null}
      <NomalModal
        isOpen={modalStatus}
        onClick={openModal}
        closeModal={() => setModalStatus(false)}
        title={`${onClickedDate}の予定を追加`}
      >
        <Form.Field>
          <div style={{ marginBottom: '10px' }}>
            <Input
              value={content}
              onChange={e => handleContent(e.target.value)}
            />
          </div>
          <div>
            <Button
              onClick={async (e: any) => {
                try {
                  const isError = await submitAddEvent();
                  console.log(isError);
                  if (isError === null) {
                    const ne = newEvent();
                    dispatch(addEvents(ne));
                    console.log('ww');
                  }
                } catch (err) {
                  alert('正しくイベントが追加されませんでした');
                } finally {
                  setModalStatus(false);
                  handleContent('');
                }
              }}
              variant="outline-primary"
            >
              追加
            </Button>
          </div>
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
        eventClick={info => {
          openModalForEditEvent(info);
        }}
      />
      <NomalModal
        isOpen={editEventModalStatus}
        onClick={openEditEventModal}
        closeModal={() => setEditEventModalStatus(false)}
        title="編集"
      >
        <Form.Field>
          <Input
            value={content}
            onChange={e => handleContent(e.target.value)}
          />
          イベント変更UI作成 編集
        </Form.Field>
      </NomalModal>
    </>
  );
};

export default withRouter(Calendar);
