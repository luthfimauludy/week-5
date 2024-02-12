import { produce } from 'immer';

import { SET_EVENT } from './constants';

export const initialState = {
  dataEvent: [],
};

export const storedKey = ['dataEvent'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_EVENT:
        draft.dataEvent = action.dataEvent;
        break;
      default:
        break;
    }
  });

export default homeReducer;
