import { Stack, Typography } from "@mui/material";
import Jumbotron from "../components/Jumbotron";
import LandingHome from "../layouts/LandingHome";
import CardOrder from "../components/card/CardOrder";
import { IOrder } from "../libs/interface/order";
import { useEffect, useState } from "react";

export default function Home() {
  const [order, setOrder] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch("https://api.npoint.io/c53fb9c69e3638e406a6");
        const data = await response.json();
        console.log("this data order", data);
        setOrder(data);
      } catch (error) {
        console.log("fetch error", error);
      }
    };
    fetchOrder();
  }, []);
  return (
    <LandingHome>
      <Jumbotron />
      <Typography sx={{ fontSize: "36px", fontWeight: "900" }} color={"#BD0707"} py={3}>
        Let's Order
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, sm: 10 }} p={1} sx={{ alignItems: "center" }}>
        {order?.map((item) => (
          <CardOrder key={item.id} {...item} />
        ))}
      </Stack>
    </LandingHome>
  );
}
