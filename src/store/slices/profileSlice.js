import supabase from '@client/client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for profile
const initialState = {
  profile: null,
  loading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (userId, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('full_name, email, avatar_url, date_of_birth, phone_number, address')
        .eq('user_id', userId)
        .single();

      if (error) {
        return rejectWithValue(error.message);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async ({ updatedProfile, userId }, { rejectWithValue }) => {
    try {
      const { error } = await supabase
        .from('users')
        .update(updatedProfile)
        .eq('user_id', userId);

      if (error) {
        return rejectWithValue(error.message);
      }

      return updatedProfile;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // No need for setProfile and clearProfile actions if they are not used
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = { ...state.profile, ...action.payload };
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export selectors
export const selectProfile = (state) => state.profile.profile;
export const selectLoading = (state) => state.profile.loading;
export const selectError = (state) => state.profile.error; // Adding error selector

// Export reducer
export default profileSlice.reducer;
