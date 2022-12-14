import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { API } from "../utils/https";

const initialState = {
  MedicalDiaryData: [],
};

const MedicalDiary = createSlice({
  name: "MedicalDiary",
  initialState: initialState,
  reducers: {
    AddMedicalDiary: (state, action) => {
      console.log("In Medical Diary : ", action.payload);
      //   state.MedicalDiary = action.payload;
    },
    MedicalDiaryData: (state, action) => {
      console.log("In Medical Diary Data : ", action.payload);
      state.MedicalDiaryData = action.payload;
    },
  },
});

export const addMedicalDiaryDataAction = (token, data) => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  console.log("Data : ", data);
  try {
    const res = await axios({
      method: "POST",
      url: `${API}/patient/Medical_DiaryView/`,
      headers: configHeader,
      data: data,
    });
    dispatch(AddMedicalDiary(res.data));
  } catch (err) {
    console.log("Add Medical Diary Error : ", err);
  }
};

export const getMedicalDiaryDataAction = (token) => async (dispatch) => {
  const configHeader = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: `${API}/patient/Medical_DiaryView/`,
      headers: configHeader,
    });
    dispatch(MedicalDiaryData(res.data));
  } catch (err) {
    console.log("Add Medical Diary Error : ", err);
  }
};

export const { AddMedicalDiary, MedicalDiaryData } = MedicalDiary.actions;
export default MedicalDiary.reducer;
