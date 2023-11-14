import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getToping = createAsyncThunk("toping/getToping", async () => {
  try {
    const { data } = await axios.get("https://api.npoint.io/6ee29807c464e0cd7e0e");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  } catch (error) {
    console.log("get toping invalid", error);
  }
});
