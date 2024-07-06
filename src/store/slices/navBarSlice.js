import { createSlice } from "@reduxjs/toolkit";

// intial state for navbarIcon
const initialState = {
    onHomePage: true
}

export const navBarSlice = createSlice({
    name: "navBar",
    initialState,
    reducers: {

        // actions
        setHomePageActive: (state) => {
            state.onHomePage = true;
        },

        setHomePageInactive: (state) => {
            state.onHomePage = false;
        }
    },
    extraReducers: {
        // reducers
    }
});

export const { setHomePageActive, setHomePageInactive } = navBarSlice.actions;
export const selectOnHomePage = (state) => state.navBar.onHomePage;

export default navBarSlice.reducer;