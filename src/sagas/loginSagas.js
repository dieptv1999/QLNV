import { LOGIN } from '../actions/actionTypes';

//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { takeEvery } from 'redux-saga/effects'; 

function* loginHandler() {
    console.log(`This is login saga`);
}

export function* login() {
    yield takeEvery(LOGIN, loginHandler);
}