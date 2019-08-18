import { SELECT_TAB } from '../constants';

const defaultState = {
    selectedKey: '2',
};

export default function serviceLocatorReducer(state = defaultState, action) {
    switch (action.type) {
        case SELECT_TAB: {
            return {
                ...state,
                selectedKey: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
