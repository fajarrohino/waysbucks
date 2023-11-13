import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrder = createAsyncThunk("order/getOrder", async () => {
  try {
    const { data } = await axios.get("https://api.npoint.io/c53fb9c69e3638e406a6");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  } catch (error) {
    console.log("get order invalid", error);
  }
});
