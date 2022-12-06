import { createSlice } from "@reduxjs/toolkit";
import { API } from "../utils/https";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  user_role: "",
  user_email: "",
};

const Authentication = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    Login: (state, action) => {
      console.log("In login action: ", action.payload);
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user_role = action.payload.user_role;
      state.user_email = action.payload.user_email;
    },
    Register: (state, action) => {
      console.log("In register action: ", action.payload);
      // state = action.payload;
    },
    Logout: (state, action) => {
      console.log("In logout action: ", action.payload);
      // state = action.payload;
      state.isLoggedIn = false;
      state.token = "";
      state.user_role = "";
      state.user_email = "";
    },
    ForgotPassword: (state, action) => {
      console.log("In forgot password action: ", action.payload);
      // state = action.payload;
    },
  },
});

export const RegisterAction = (data) => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
  };

  // const apiData = {
  //   email: data.email,
  //   password: data.password,
  //   role: data.role,
  // };

  try {
    const response = await axios({
      method: "post",
      url: API + "user/userregister",
      data: data,
      headers: configHeader,
    });
    console.log("Register response: ", response);
    dispatch(Register(response.data));
  } catch (error) {
    console.log("Register error: ", error);
  }
};

export const loginAction = (data) => async (dispatch) => {
  console.log("In login action: ", data);

  const configHeader = {
    "Content-Type": "application/json",
  };

  const dataValue = {
    username: data.email,
    password: data.password,
  };

  console.log("Login data: ", data);

  try {
    const res = await axios({
      method: "POST",
      url: `${API}/user/login/`,
      data: dataValue,
      headers: configHeader,
    });
    console.log("Login api call: ", res.data);
    dispatch(Login(res.data));
  } catch (err) {
    console.log("Login Error : ", err);
  }
};

export const LogoutAction = () => async (dispatch) => {
  console.log("In logout action: ");
  const configHeader = {
    "Content-Type": "application/json",
  };

  try {
    const res = await axios({
      method: "GET",
      url: `${API}/user/logout/`,
      headers: configHeader,
    });
    console.log("Logout api call: ", res.data);
    dispatch(Logout(res.data));
  } catch (err) {
    console.log("Logout Error : ", err);
  }
};

export const { Login, Register, Logout, ForgotPassword } =
  Authentication.actions;

export default Authentication.reducer;
