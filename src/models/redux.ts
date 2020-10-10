export interface LoginUserState {
  uid: string;
  name: string;
  iconUrl: string;
  isLoading: boolean;
  error?: any;
}
export interface CalendarEventsState {
  events: CalendarEvent[];
  isLoading: boolean;
  error?: any;
}
export interface CalendarEvent {
  id: number | undefined;
  title: string | undefined;
  date: string | undefined;
  backgroundColor: string | undefined;
  borderColor: string | undefined;
  textColor: string | undefined;
}
