import supabase from '@client/client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for profile
const initialState = {
    shgProfile: {},
    shgRole : '',
    loading: false,
    error: null,
};

export const fetchSHGProfile = createAsyncThunk(
    'shgProfile/fetchSHGProfile',
    async ({ user_id }, { rejectWithValue }) => {
        // Fetch SHG Profile from the database using the user_id
    }
);

export const updateSHGProfile = createAsyncThunk(
    'shgProfile/updateSHGProfile',
    async ({ updatedSHG, userId }, { rejectWithValue }) => {
            // Update SHG Profile in the database using the updatedSHG and userI

    }
);

// Slice
export const profileSlice = createSlice({
    name: 'shgProfile',
    initialState,
    reducers: {
        // No need for setProfile and clearProfile actions if they are not used
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSHGProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSHGProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.shgProfile = action.payload;
            })
            .addCase(fetchSHGProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateSHGProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateSHGProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.shgProfile = action.payload;
            })
            .addCase(updateSHGProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export selectors
export const selectMySHGProfile = (state) => state.shgProfile.shgProfile;
export const selectMySHGProfileRole = (state) => state.shgProfile.shgRole;
export const selectMySHGLoading = (state) => state.shgProfile.loading;
export const selectMySHGError = (state) => state.shgProfile.error;

// Export the reducer
export default profileSlice.reducer;

