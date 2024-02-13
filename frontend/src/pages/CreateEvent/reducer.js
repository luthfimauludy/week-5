import { produce } from 'immer';

import { CREATE_EVENT } from './constants';

export const initialState = {
  createEvent: [],
};

export const storedKey = ['createEvent'];

const createEventReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_EVENT:
        draft.createEvent = action.createEvent;
        break;
      default:
        break;
    }
  });

export default createEventReducer;
