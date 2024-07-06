import appReducer from '../reducer/appReducer';

// redux store
const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;


