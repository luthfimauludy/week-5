import { put, call, takeLatest } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getEvent } from '@domain/api';
import { setEvent } from './actions';
import { GET_EVENT } from './constants';

function* doGetEvent({ cbFailed, cbSuccess }) {
  yield put(setLoading(true));
  try {
    const res = yield call(getEvent);
    cbSuccess && cbSuccess(res.results);
    yield put(setEvent(res.results));
  } catch (error) {
    console.log(error);
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_EVENT, doGetEvent);
}
