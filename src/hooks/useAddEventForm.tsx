import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actionCreaters/authentication';
import { firebaseLogin } from '../services/firebase/authentication/authentication';
import { CalendarEvent } from '../models/redux';
import { postEvent } from '../services/backendAPI/event';

export const useAddEventForm = (): {
  date: string;
  handleDate: (e: string) => void;
  content: string;
  handleContent: (p: string) => void;
  nextEventID: number;
  handleNextEventID: (p: number) => void;
  submitAddEvent: () => Promise<any>;
  addedEventForCliant: (e: CalendarEvent[]) => CalendarEvent[];
  newEvent: () => CalendarEvent;
} => {
  const [date, setDate] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [nextEventID, setNextEventID] = useState<number>(0);
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();
  const handleDate = (e: string) => {
    console.log(e);
    /* バリデーション未実装 */
    setDate(e);
  };

  const handleContent = (p: string) => {
    setContent(p);
  };
  const handleNextEventID = (n: number) => {
    setNextEventID(n);
  };

  const submitAddEvent = (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      (async () => {
        try {
          console.log('isError');

          const isError = await postEvent({
            date,
            content,
            nextEventID: String(nextEventID),
          });
          console.log(isError);
          resolve(null);
        } catch (err) {
          /* エラーハンドリング未実装
          エラー時にアラートしてそのイベントを削除しないといけない*/
          console.log(err);
          reject(err);
        }
      })();
    });
  };
  const newEvent = (): CalendarEvent => ({
    id: String(nextEventID + 1),
    title: content,
    start: date,
    backgroundColor: '',
    borderColor: '',
    textColor: '',
  });
  const addedEventForCliant = (e: CalendarEvent[]): CalendarEvent[] => {
    const r = [
      ...e,
      {
        id: String(nextEventID + 1),
        title: content,
        start: date,
        backgroundColor: '',
        borderColor: '',
        textColor: '',
      },
    ];

    return r;
  };

  return {
    date,
    handleDate,
    content,
    handleContent,
    submitAddEvent,
    nextEventID,
    handleNextEventID,
    addedEventForCliant,
    newEvent,
  };
};
