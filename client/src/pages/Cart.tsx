import { Box, Stack, Typography } from "@mui/material";
import CardCheckOut from "../components/card/CardCheckOut";
import FormCart from "../components/form/FormCart";
import Landing from "../layouts/Landing";

export default function Cart() {
  return (
    <Landing>
      <Typography>My Cart</Typography>
      <Stack direction={"row"} gap={10}>
        <Stack width={"60%"} gap={3}>
          <CardCheckOut />
          <CardCheckOut />
        </Stack>
        <Box width={"30%"}>
          <FormCart />
        </Box>
      </Stack>
    </Landing>
  );
}
