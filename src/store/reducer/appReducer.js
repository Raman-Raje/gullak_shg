import { combineReducers } from 'redux';

// reducers
import sideBarReducer from '@store/slices/sideBarSlice';
import layoutReducer from '@store/slices/layout';
import profileReducer from '@store/slices/profileSlice';
import toggleSwitchReducer from '@store/slices/toggleSwitchSlice';
import myGroupReducer from '@store/slices/myGroupSlice';
import groupsReducer from '@store/slices/groupsSlice';

// redux store
const appReducer = combineReducers({
    layout: layoutReducer,
    sideBar: sideBarReducer,
    profile: profileReducer,
    toggleSwitch: toggleSwitchReducer,
    myGroup: myGroupReducer,
    groups: groupsReducer,
});


export default appReducer;

