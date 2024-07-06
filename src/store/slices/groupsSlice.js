import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '@client/client';

// Initial state for profile
const initialState = {
    groups: [],
    loading: false,
    error: null,
};

export const fetchGroups = createAsyncThunk(
    'groups/fetchGroups',
    async ({ user_id }, { rejectWithValue }) => {
        try {

            console.log('fetchGroups', user_id);
            // Fetch SHGs from the database using the user_id
            const { data, error } = await supabase.rpc('fetch_groups', { user_id_input: user_id });
            if (error) throw error;
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const handleAcceptInvite = createAsyncThunk(
    'groups/handleAcceptInvite',
    async ({ user_id, group_id, notify, navigate }, { rejectWithValue }) => {
        try {
            const { error } = await supabase.rpc('accept_membership_invite', { user_id_input: user_id, group_id_input: group_id });
            if (error) throw error;
            notify('Invite accepted', 'success');
            navigate('/');
            return group_id;
        } catch (error) {
            notify('Error accepting invite', 'error')
            return rejectWithValue(error.message);
        }
    }
);

export const handleRejectInvite = createAsyncThunk(
    'groups/handleRejectInvite',
    async ({ user_id, group_id, notify }, { rejectWithValue }) => {
        try {
            const { error } = await supabase.rpc('reject_membership_invite', { user_id_input: user_id, group_id_input: group_id });
            if (error) throw error;
            return group_id;
        } catch (error) {
            notify('Error rejecting invite', 'error')
            return rejectWithValue(error.message);
        }
    }
);

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        setGroups: (state, action) => {
            state.groups = action.payload;
        },
        clearGroups: (state) => {
            state.groups = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGroups.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGroups.fulfilled, (state, action) => {
                state.groups = action.payload;
                state.loading = false;
            })
            .addCase(fetchGroups.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(handleAcceptInvite.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(handleAcceptInvite.fulfilled, (state, action) => {
                // Optionally update the state to reflect accepted invites if needed
                state.loading = false;
            })
            .addCase(handleAcceptInvite.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(handleRejectInvite.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(handleRejectInvite.fulfilled, (state, action) => {
                state.groups = state.groups.filter(group => group.group_id !== action.payload);
                state.loading = false;
            })
            .addCase(handleRejectInvite.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const { setGroups, clearGroups, removeGroup } = groupsSlice.actions;

// Selectors
export const selectGroups = (state) => state.groups.groups;
export const selectLoading = (state) => state.groups.loading;
export const selectError = (state) => state.groups.error;

export default groupsSlice.reducer;
