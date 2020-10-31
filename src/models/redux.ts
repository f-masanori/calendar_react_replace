export interface LoginUserState {
  uid: string;
  name: string;
  iconUrl: string;
  isLoading: boolean;
  error?: any;
}
export interface CalendarEventsState {
  events: CalendarEvent[];
  nextEventID: number;
  isLoading: boolean;
  error?: any;
}
export interface CalendarEvent {
  id: string | undefined;
  title: string | undefined;
  start: string | undefined;
  backgroundColor: string | undefined;
  borderColor: string | undefined;
  textColor: string | undefined;
}
