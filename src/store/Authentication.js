import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API } from "../utils/https";

const initialState = {
  isLoggedIn: false,
  token: "",
};

const Authentication = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    Login: (state, action) => {
      // console.log("In login action: ", action.payload);
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    Register: (state, action) => {
      console.log("In register action: ", action.payload);
      // state = action.payload;
    },
    Logout: (state, action) => {
      // console.log("In logout action: ", action.payload);
      state.isLoggedIn = false;
      state.token = "";
    },
    ForgotPassword: (state, action) => {
      console.log("In forgot password action: ", action.payload);
      // state = action.payload;
    },
  },
});

export const RegisterUserAction = (data) => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
  };

  const apiData = {
    User_Role: data.userRoleId,
    User_Full_Name: data.userName,
    Email_Id: data.email,
    password: data.password,
  };
  // console.log("Register data: ", apiData);

  try {
    const response = await axios({
      method: "POST",
      url: `${API}/user/userregister/`,
      data: apiData,
      headers: configHeader,
    });
    console.log("Register response: ", response);
    dispatch(Register(response.data));
    alert("User registered successfully");
  } catch (error) {
    // console.log("Register error: ", error?.response.data?.error.Email_Id);
    alert(error?.response?.data?.error.Email_Id);
  }
};

export const loginAction = (data) => async (dispatch) => {
  // console.log("In login action: ", data);

  const configHeader = {
    "Content-Type": "application/json",
  };

  const dataValue = {
    username: data.email,
    password: data.password,
  };

  // console.log("Login data: ", data);

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
    dispatch(Logout(res.data));
  } catch (err) {
    console.log("Logout Error : ", err);
  }
};

export const { Login, Register, Logout, ForgotPassword } =
  Authentication.actions;

export default Authentication.reducer;
