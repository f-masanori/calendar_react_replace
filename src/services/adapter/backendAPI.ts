import { FetchEvents } from '../backendAPI/event';
import { CalendarEventsState, CalendarEvent } from '../../models/redux';
/* apiを叩いてfetchしたデータを変換する */
export const convFetchedDtoPreD = (e: FetchEvents): CalendarEventsState => {
  const events: CalendarEvent[] = e.Events.map(event => {
    return {
      id: String(event.ID),
      title: event.Event,
      start: event.Date,
      backgroundColor: event.BackgroundColor,
      borderColor: event.BorderColor,
      textColor: event.TextColor,
    };
  });
  const r: CalendarEventsState = {
    events,
    nextEventID: e.NextEventID,
    isLoading: false,
  };

  return r;
};
