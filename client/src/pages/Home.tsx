import { Stack, Typography } from "@mui/material";
import Jumbotron from "../components/Jumbotron";
import LandingHome from "../layouts/LandingHome";
import CardOrder from "../components/card/CardOrder";

export default function Home() {
  return (
    <LandingHome>
      <Jumbotron />
      <Typography sx={{ fontSize: "36px", fontWeight: "900" }} color={"#BD0707"} py={3}>
        Let's Order
      </Typography>
      <Stack direction={"row"} spacing={10} p={1}>
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
      </Stack>
    </LandingHome>
  );
}
