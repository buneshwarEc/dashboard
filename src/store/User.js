import { createSlice } from "@reduxjs/toolkit";
import { API } from "../utils/https";
import axios from "axios";

const initialState = {
  UserDetails: [],
};

const User = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    UserDetails: (state, action) => {
      console.log("In User Details : ", action.payload);
      state.UserDetails = action.payload;
    },
  },
});

export const getUserDetailsAction = (token) => async (dispatch) => {
  console.log("In get user details action: ", token);
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
    console.log("Get User Detail api call: ", res.data);
    dispatch(UserDetails(res.data));
  } catch (err) {
    console.log("Get User Details Error : ", err);
  }
};

export const { UserDetails } = User.actions;

export default User.reducer;
