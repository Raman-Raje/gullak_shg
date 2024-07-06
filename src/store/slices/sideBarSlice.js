import { createSlice } from "@reduxjs/toolkit";

// intial state for navbarIcon
const initialState = {
    sideBarIndex: 'shg',
}

export const sideBarSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        // actions
        setSideBarIndex: (state, action) => {
            state.sideBarIndex = action.payload;
        },
    }

});

export const { setSideBarIndex } = sideBarSlice.actions;
export const selectSideBarIndex = (state) => state.sideBar.sideBarIndex;

export default sideBarSlice.reducer;