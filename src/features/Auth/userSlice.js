import { createSlice } from '@reduxjs/toolkit';
import { StorageKeys } from 'constants';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      console.log(action.payload.email);
      state.current = action.payload.email;

      localStorage.setItem(StorageKeys.TOKEN, action.payload.accessToken);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload.email));
    },
  },
  extraReducers: {},
});

export const { actions, reducer } = userSlice;
export const { setUserInfo } = actions;
export default reducer;
