import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actionCreaters/authentication';
import { firebaseLogin } from '../services/firebase/authentication/authentication';
import { CalendarEvent } from '../models/redux';
import { postEvent, editEvent } from '../services/backendAPI/event';

export const useEditEventForm = (): {
  editedEvent: CalendarEvent;
  setEditedEvent: any;
  handleEditedEvent: (p: {
    id?: string;
    title?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
  }) => void;
  submitEditEvent: () => Promise<any>;
  editedEventForCliant: (e: CalendarEvent[]) => CalendarEvent[];
} => {
  const [editedEvent, setEditedEvent] = useState<CalendarEvent>({
    id: '',
    title: '',
    start: '',
    backgroundColor: '',
    borderColor: '',
    textColor: '',
  });
  const [date, setDate] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [nextEventID, setNextEventID] = useState<number>(0);
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();

  const handleEditedEvent = ({
    id,
    title,
    backgroundColor,
    borderColor,
    textColor,
  }: {
    id?: string;
    title?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
  }) => {
    const edited = editedEvent;
    if (id) {
      edited.id = id;
    }
    if (title) {
      edited.title = title;
    }
    if (backgroundColor) {
      edited.backgroundColor = backgroundColor;
    }
    if (borderColor) {
      edited.borderColor = borderColor;
    }
    if (textColor) {
      edited.textColor = textColor;
    }
    setEditedEvent(edited);
  };

  const submitEditEvent = (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
      (async () => {
        try {
          const isError = await editEvent(editedEvent);
          console.log(isError);
          resolve(null);
        } catch (err) {
          console.log(err);
          reject(err);
        }
      })();
    });
  };

  const editedEventForCliant = (eArr: CalendarEvent[]): CalendarEvent[] => {
    const r = eArr.map(event => {
      if (event.id === editedEvent.id) {
        return editedEvent;
      }

      return event;
    });

    return r;
  };

  return {
    editedEvent,
    setEditedEvent,
    handleEditedEvent,
    submitEditEvent,
    editedEventForCliant,
  };
};
