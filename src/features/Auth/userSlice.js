import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { StorageKeys } from 'constants';

export const register = createAsyncThunk('user/register', async (payload) => {
  const response = await userApi.register(payload);

  localStorage.setItem(StorageKeys.TOKEN, response.data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(response.data.user));

  return response.data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const response = await userApi.login(payload);
  console.log(response);

  localStorage.setItem(StorageKeys.TOKEN, response.data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(response.data.user));

  return response.data.user;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: localStorage.getItem(StorageKeys.USER) || {},
  },
  reducers: {
    logout(state) {
      // Remove user data and token in localStorage.
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);

      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
