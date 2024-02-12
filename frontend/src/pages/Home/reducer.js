import { produce } from 'immer';

import { SET_EVENT } from './constants';

export const initialState = {
  events: [],
};

export const storedKey = ['events'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_EVENT:
        draft.events = action.events;
        break;
    }
  });

export default homeReducer;
