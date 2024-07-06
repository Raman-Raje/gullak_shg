import { createSlice } from "@reduxjs/toolkit";

// define the initial state
const initialState = {
    isChecked: false,
};

export const toggleSwitchSlice = createSlice({
    name: "toggleSwitch",
    initialState,
    reducers: {
        // actions
        toggletoggleSwitch: (state) => {
            state.isChecked = !state.isChecked;
        }
    }
});

export const { toggletoggleSwitch } = toggleSwitchSlice.actions;
export const selecttoggleSwitch = (state) => state.toggleSwitch.isChecked;

export default toggleSwitchSlice.reducer;
