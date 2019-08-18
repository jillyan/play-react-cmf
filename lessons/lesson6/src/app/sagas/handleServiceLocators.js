import cmf, { selectors, componentState  } from '@talend/react-cmf';
import { call, put, select } from 'redux-saga/effects';
import { ERROR_GETTING_SERVICELOCATORS } from '../constants';

export function* handleServiceLocators() {
    const { response, data } = yield call(cmf.sagas.http.get, '/servicelocators.json');
    if (!response.ok) {
        yield put({
            type: ERROR_GETTING_SERVICELOCATORS,
            data,
        });
    } else {
        yield put(cmf.actions.collections.addOrReplace('servicelocators', data));
    }
}


export function* refreshServiceLocators() {
    yield call(handleServiceLocators);
}

export function* selectTab(item) {
    yield put(cmf.actions.collections.addOrReplace('serviceLocator.selectedKey', item));
}