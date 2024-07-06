import supabase from '@client/client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for profile
const initialState = {
    myGroup: {},
    loading: false,
    error: null,
};

export const fetchGroupInfo = createAsyncThunk(
    'mySHG/fetchGroupInfo',
    async ({ user_id, group_id }, { rejectWithValue }) => {
        try {
            // Fetch SHGs from the database using the user_id
            const { data, error } = await supabase.rpc('fetch_group_info', { user_id_input: user_id, group_id_input: group_id });

            if (error) throw error;

            return data[0] || {};
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Slice
export const myGroupSlice = createSlice({
    name: 'myGroup',
    initialState,
    reducers: {

        setMyGroup: (state, action) => {
            state.shg = action.payload;
        },
        clearMyGroup: (state) => {
            state.shg = {};
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGroupInfo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGroupInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.myGroup = action.payload;
            })
            .addCase(fetchGroupInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


// Export the actions
export const { setMyGroup, clearMyGroup } = myGroupSlice.actions;

export const selectMyGroup = (state) => state.myGroup.myGroup;
export const selectLoading = (state) => state.myGroup.loading;
export const selectError = (state) => state.myGroup.error;

// Export the reducer
export default myGroupSlice.reducer;