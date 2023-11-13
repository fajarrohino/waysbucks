import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "../components/Jumbotron";
import CardOrder from "../components/card/CardOrder";
import LandingHome from "../layouts/LandingHome";
import { RootState } from "../store";
import { getOrder } from "../store/order/action";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export default function Home() {
  const stateOrder = useSelector((state: RootState) => state.order);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <LandingHome>
      <Jumbotron />
      <Typography sx={{ fontSize: "36px", fontWeight: "900" }} color={"#BD0707"} py={3}>
        Let's Order
      </Typography>
      <Stack gap={3} display={"flex"} flexWrap={"wrap"} flexDirection={"row"}>
        {stateOrder.loading ? <Typography>Loading...</Typography> : stateOrder.data?.map((item) => <CardOrder key={item.id} {...item} />)}
      </Stack>
    </LandingHome>
  );
}
