import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../utils/https";

const initialState = {
  TestimonialHistoryData: [],
  TestimonialData: [],
};

const Testimonial = createSlice({
  name: "Testimonial",
  initialState: initialState,
  reducers: {
    TestimonialHistoryData: (state, action) => {
      console.log("In Testimonial History Data : ", action.payload);
      state.TestimonialHistoryData = action.payload;
    },
    AddTestimonialData: (state, action) => {
      console.log("In Add Testimonial : ", action.payload);
      state.TestimonialData = action.payload;
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

export const addTestimonialAction = (token, data) => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  console.log("data in redux", data);

  try {
    const res = await axios({
      method: "POST",
      url: `${API}/patient/PatientTestmonial/`,
      headers: configHeader,
      data: data,
    });
    dispatch(AddTestimonialData(res.data));
  } catch (err) {
    console.log("Add Testimonial Error : ", err);
  }
};

export const { TestimonialHistoryData, AddTestimonialData } =
  Testimonial.actions;

export default Testimonial.reducer;
