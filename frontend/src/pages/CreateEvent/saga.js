import { put, call, takeLatest } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { createEvent } from '@domain/api';
import { setCreateEvent } from './actions';
import { CREATE_EVENT } from './constants';

function* doCreateEvent({ dataEvent, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const res = yield call(createEvent, dataEvent);
    yield put(setCreateEvent(res.results));
    cbSuccess && cbSuccess(res.results);
  } catch (error) {
    console.log(error);
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(CREATE_EVENT, doCreateEvent);
}
