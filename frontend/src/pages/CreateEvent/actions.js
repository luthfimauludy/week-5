import { CREATE_EVENT } from './constants';

export const setCreateEvent = (dataEvent, cbSuccess, cbFailed) => ({
  type: CREATE_EVENT,
  dataEvent,
  cbSuccess,
  cbFailed,
});
