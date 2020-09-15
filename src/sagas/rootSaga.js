import { all } from 'redux-saga/effects';

import { login } from './loginSagas';

export default function* rootSaga() {
    yield all([
        login(),
    ]);
}