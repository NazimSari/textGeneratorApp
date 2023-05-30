import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getParagraph = createAsyncThunk(
  "paragraph/getParagraph",
  async ({ count, format }) => {
    const response = await axios.get(
      `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${format}`
    );
    return response.data;
  }
);

export const paragraphSlice = createSlice({
  name: "paragraph",
  initialState: {
    item: "",
  },
  reducers: {},
  extraReducers: {
    [getParagraph.fulfilled]: (state, action) => {
      state.item = action.payload;
    },
  },
});

export default paragraphSlice.reducer;
