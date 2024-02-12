import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectEvent = createSelector(selectHomeState, (state) => state.dataEvent);
