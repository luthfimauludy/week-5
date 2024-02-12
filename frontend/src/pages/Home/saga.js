import { put, call, takeLatest } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getEvent } from '@domain/api';
import { setEvent } from './actions';
import { GET_EVENT } from './constants';

function* doGetEvent(cbSuccess, cbFailed) {
  yield put(setLoading(true));
  try {
    const { res } = yield call(getEvent);
    yield put(setEvent(res));
    cbSuccess && cbSuccess(res);
  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_EVENT, doGetEvent);
}
