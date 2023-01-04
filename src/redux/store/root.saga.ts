import {all} from 'redux-saga/effects';
import {counterSaga} from '../middlewares/counter.saga';

function* rootSaga() {
  yield all([counterSaga()]);
}

export {rootSaga};
