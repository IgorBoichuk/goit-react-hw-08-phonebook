import { createSlice } from '@reduxjs/toolkit';
import { regUser, loginUser, logoutUser, currentUser } from './operations';

const userSlice = createSlice({
  name: 'contactsList',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    loggedIn: false,
  },

  extraReducers: {
    [regUser.fulfilled](state, action) {
      state.user = action.payload;
      state.loggedIn = true;
    },

    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loggedIn = true;
    },

    [logoutUser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.loggedIn = false;
    },

    [currentUser.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload;
      // state.token = action.payload.token;
      state.loggedIn = true;
    },
  },
});

export const userReducer = userSlice.reducer;
