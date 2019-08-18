import { takeLatest } from 'redux-saga/effects';
import { REFRESH_SERVICE_LOCATORS, SELECT_TAB } from '../constants';
import { refreshServiceLocators, selectTab } from '../sagas';

export default function* main() {
    // Welcome in the main Saga
    // you can handle all the effects you want here.
    // enjoy the redux-saga API.
    yield takeLatest(REFRESH_SERVICE_LOCATORS, refreshServiceLocators);
    yield takeLatest(SELECT_TAB, selectTab);
}
