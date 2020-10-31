import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actionCreaters/authentication';
import { firebaseLogin } from '../services/firebase/authentication/authentication';

import { postEvent } from '../services/backendAPI/event';

export const useAddEventForm = (): {
  date: string;
  handleDate: (e: string) => void;
  content: string;
  handleContent: (p: string) => void;
  nextEventID: number;
  handleNextEventID: (p: number) => void;
  submitAddEvent: () => void;
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

  const submitAddEvent = async () => {
    try {
      await postEvent({ date, content, nextEventID: String(nextEventID) });
    } catch {
      /* エラーハンドリング未実装*/
    }
  };

  return {
    date,
    handleDate,
    content,
    handleContent,
    submitAddEvent,
    nextEventID,
    handleNextEventID,
  };
};
