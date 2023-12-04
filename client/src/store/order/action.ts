import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrder } from "../../libs/interface/order";
import { RootState } from "..";

export const getOrder = createAsyncThunk<IOrder[], void, { state: RootState }>("order/getOrder", async () => {
  try {
    const response = await axios.get("https://api.npoint.io/c53fb9c69e3638e406a6");
    const data = response.data;
    console.log("this data", data);
    return data;
  } catch (error) {
    console.log("get order invalid", error);
  }
});

export const getOrderById = createAsyncThunk<IOrder, number, { state: RootState }>("order/getOrderById", async (orderId) => {
  try {
    const response = await axios.get("https://api.npoint.io/c53fb9c69e3638e406a6");
    const data = response.data?.find((order: IOrder) => order.id === orderId);
    console.log("data by Id :", data);
    return data;
  } catch (error) {
    console.log("get order by id invalid", error);
  }
});
