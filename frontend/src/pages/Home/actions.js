import { GET_EVENT, SET_EVENT } from './constants';

export const getEvent = (cbSuccess, cbFailed) => ({
  type: GET_EVENT,
  cbSuccess,
  cbFailed,
});

export const setEvent = (events) => ({
  type: SET_EVENT,
  events,
});
