import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

/* FullCalender */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { Button, Input, Form } from 'semantic-ui-react';
import { NomalModal } from '../template/modal';
import {
  postEvent,
  getNextEventID,
  getAllEventByAPI,
} from '../../services/backendAPI/event';

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
    (async () => {
      const events = await getAllEventByAPI();
      console.log(events);
    })();

    console.log('useEffect end');
  }, []);
  const openModalForAddEvent = (props: any) => {
    const date = props.dateStr;
    openModal();
    setEvents([]);
  };
  const [events, setEvents] = useState([{ title: 'ggg', date: '2020-10-07' }]);
  const handleSubmitForAdd = async (e: any) => {
    // interface AddEventValues {
    //   NewEventID: number;
    //   Title: string;
    //   Date: string | undefined;
    // }
    // const AddEventValues: AddEventValues = {
    //   NewEventID: Number(newEventIDRef.current?.value),
    //   Title: formRef.current.value,
    //   Date: addEventModalDateRef?.current?.innerText,
    // };
    // const calendarApi = calendarRef.current.getApi();
    // if (AddEventValues.Title == '' || AddEventValues.Title == null) {
    //   alert('入力がありません。');
    // } else {
    //   /* DB変更処理API(Event追加) */
    //   API.AddEvent(
    //     AddEventValues.NewEventID,
    //     AddEventValues.Date,
    //     AddEventValues.Title,
    //   );
    //   /* 画面上Event更新 */
    //   calendarApi.addEvent({
    //     id: AddEventValues.NewEventID,
    //     title: AddEventValues.Title,
    //     date: AddEventValues.Date,
    //     backgroundColor: 'skyblue',
    //     borderColor: 'skyblue',
    //     textColor: 'black',
    //   });
    //   /* EventID管理 */
    //   if (newEventIDRef.current !== null) {
    //     newEventIDRef.current.value = String(
    //       Number(newEventIDRef.current.value) + 1,
    //     );
    //   }
    //   /*  */
    //   formRef.current.value = '';
    //   closeModalForAddEvent();
    // }
    // const nextEID = await getNextEventID();
    // console.log(nextEID);
    await postEvent(1);
    e.preventDefault();
  };

  return (
    <>
      <NomalModal
        isOpen={modalStatus}
        onClick={openModal}
        closeModal={() => setModalStatus(false)}
      >
        <Form.Field>
          <label>Enter Password</label>
          <Input />
          <Button onClick={handleSubmitForAdd}>Submit</Button>
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
        events={events}
        // eventClick={(info) => { editEvent(info) }}
      />
    </>
  );
};

export default withRouter(Calendar);
