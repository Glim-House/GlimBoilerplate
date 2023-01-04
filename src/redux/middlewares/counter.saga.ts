import {takeEvery} from 'redux-saga/effects';
import {INCREMENT} from '../actions/counter.action';

function* incrementCounter() {
  yield console.log('Updating');
}

export function* counterSaga() {
  yield takeEvery(INCREMENT, incrementCounter);
}
