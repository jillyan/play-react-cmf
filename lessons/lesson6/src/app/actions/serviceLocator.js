import { SELECT_TAB } from '../constants';

const selectTab = selectedKey => ({
    type: SELECT_TAB,
    payload: selectedKey,
});

export default selectTab;

