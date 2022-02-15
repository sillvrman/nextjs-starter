import { all, takeLatest } from 'redux-saga/effects';

import { setMeData } from '../reducers/user';

function* setData(action: any) {
    return action;
}
function* logoutSaga({ payload }: any) {
    yield localStorage.clear();
}
export default function* root() {
    yield all([takeLatest(setMeData.type, setData)]);
}
