import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { StorageKeys } from 'constants';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

export const register = createAsyncThunk('user/register', async (payload) => {
  // const response = await userApi.register(payload);
  const { email, password } = payload;

  const user = await createUserWithEmailAndPassword(auth, email, password);

  localStorage.setItem(StorageKeys.TOKEN, auth.currentUser.accessToken);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(auth.currentUser.email));

  return auth.currentUser.email;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  // const response = await userApi.login(payload);
  const { email, password } = payload;

  const user = await signInWithEmailAndPassword(auth, email, password);

  localStorage.setItem(StorageKeys.TOKEN, auth.currentUser.accessToken);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(auth.currentUser.email));

  return auth.currentUser.email;
});

export const logout = createAsyncThunk('user/logout', async (payload) => {
  signOut(auth);
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  },
  reducers: {
    // logout(state) {
    //   // Remove user data and token in localStorage.
    //   localStorage.removeItem(StorageKeys.TOKEN);
    //   localStorage.removeItem(StorageKeys.USER);
    //   state.current = {};
    // },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;
// export const { logout } = actions;
export default reducer;
