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
  }, []);

  if (stateOrder.loading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <LandingHome>
      <Jumbotron />
      <Typography sx={{ fontSize: "36px", fontWeight: "900" }} color={"#BD0707"} py={3}>
        Let's Order
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, sm: 10 }} p={1} sx={{ alignItems: "center" }}>
        {stateOrder.data?.map((item) => (
          <CardOrder key={item.id} {...item} />
        ))}
      </Stack>
    </LandingHome>
  );
}
