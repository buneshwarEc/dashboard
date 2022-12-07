import { createSlice } from "@reduxjs/toolkit";
import { API } from "../utils/https";
import axios from "axios";

const initialState = {
  UserDetails: [],
  UserRoll: [],
};

const User = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    UserDetails: (state, action) => {
      // console.log("In User Details : ", action.payload);
      state.UserDetails = action.payload;
    },
    UpdateUserDetails: (state, action) => {
      console.log("In User Details : ", action.payload);
      state.UserDetails = action.payload;
    },
    UserRoll: (state, action) => {
      // console.log("In User Roll : ", action.payload);
      state.UserRoll = action.payload.user_role;
    },
  },
});

export const getUserDetailsAction = (token) => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  try {
    const res = await axios({
      method: "GET",
      url: `${API}/user/getuser/`,
      headers: configHeader,
    });
    dispatch(UserDetails(res.data));
  } catch (err) {
    console.log("Get User Details Error : ", err);
  }
};

export const updateUserDetailsAction = (token, data) => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  console.log("Data : ", data);

  try {
    const res = await axios({
      method: "PATCH",
      url: `${API}/user/updateuser/`,
      headers: configHeader,
      data: data,
    });
    dispatch(UpdateUserDetails(res.data));
  } catch (err) {
    console.log("Update User Details Error : ", err);
  }
};

export const getUserRollAction = () => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
  };

  try {
    const res = await axios.get(`${API}/user/getrole/`, configHeader);
    dispatch(UserRoll(res.data));
  } catch (err) {
    console.log("Get User Roll Error : ", err);
  }
};

export const { UserDetails, UserRoll, UpdateUserDetails } = User.actions;

export default User.reducer;
