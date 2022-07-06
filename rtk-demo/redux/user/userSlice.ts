import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetch from 'node-fetch';

const url = 'https://jsonplaceholder.typicode.com/users';

interface UserState {
  data: [];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  isLoading: false,
  error: null,
};

const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message!;
      state.data = [];
    });
  },
});

export const { reducer: userReducer } = userSlice;
export { fetchUsers };
