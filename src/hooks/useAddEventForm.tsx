import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actionCreaters/authentication';
import { firebaseLogin } from '../services/firebase/authentication/authentication';

import { postEvent } from '../services/backendAPI/event';

export const useLoginForm = (): {
  date: string;
  handleDate: (e: string) => void;
  content: string;
  handleContent: (p: string) => void;
  nextEventID: string;
  handleNextEventID: (p: string) => void;
  submitAddEvent: (h: any) => void;
} => {
  const [date, setDate] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [nextEventID, setNextEventID] = useState<string>('');
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
  const handleNextEventID = (p: string) => {
    setNextEventID(p);
  };

  const submitAddEvent = async (history: any) => {
    try {
      await postEvent({ date, content, nextEventID });
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
