import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../utils/https";

const initialState = {
  TestimonialHistoryData: [],
};

const Testimonial = createSlice({
  name: "Testimonial",
  initialState: initialState,
  reducers: {
    TestimonialHistoryData: (state, action) => {
      console.log("In Testimonial History Data : ", action.payload);
      state.TestimonialHistoryData = action.payload;
    },
  },
});

export const getTestimonialHistoryDataAction = (token) => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  try {
    const res = await axios({
      method: "GET",
      url: `${API}/patient/PatientTestmonial/`,
      headers: configHeader,
    });
    dispatch(TestimonialHistoryData(res.data));
  } catch (err) {
    console.log("Get Testimonial History Data Error : ", err);
  }
};

export const { TestimonialHistoryData } = Testimonial.actions;

export default Testimonial.reducer;
