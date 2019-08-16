import { takeLatest } from 'redux-saga/effects';
import { REFRESH_SERVICE_LOCATORS } from '../constants';
import { refreshServiceLocators, switchTab } from '../sagas';

export default function* main() {
    // Welcome in the main Saga
    // you can handle all the effects you want here.
    // enjoy the redux-saga API.
    yield takeLatest(REFRESH_SERVICE_LOCATORS, refreshServiceLocators);
    yield takeLatest('TabBar.setState', switchTab);
}
