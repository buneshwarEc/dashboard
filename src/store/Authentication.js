import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

const Authentication = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    Login: (state, action) => {
      console.log("In login action: ", action.payload);
      // state = action.payload;
    },
    Register: (state, action) => {
      console.log("In register action: ", action.payload);
      // state = action.payload;
    },
    Logout: (state, action) => {
      console.log("In logout action: ", action.payload);
      // state = action.payload;
    },
    ForgotPassword: (state, action) => {
      console.log("In forgot password action: ", action.payload);
      // state = action.payload;
    },
  },
});

export const { Login, Register, Logout, ForgotPassword } =
  Authentication.actions;

export default Authentication.reducer;
