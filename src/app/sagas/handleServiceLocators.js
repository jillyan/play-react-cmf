import cmf from '@talend/react-cmf';
import { call, put } from 'redux-saga/effects';
import { ERROR_GETTING_SERVICELOCATORS } from '../constants';

export default function* handleServiceLocators() {
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

