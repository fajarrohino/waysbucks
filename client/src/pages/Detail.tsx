import { Box, Stack, Typography } from "@mui/material";
import Landing from "../layouts/Landing";
import CardPicture from "../components/card/CardPicture";
import CardToping from "../components/card/CardToping";
import ButtonAddCart from "../components/button/ButtonAddCart";

export default function Detail() {
  return (
    <Landing>
      <Stack display={"flex"} direction={"row"} gap={10}>
        <CardPicture />
        <Box width={"576px"}>
          <Typography sx={{ fontSize: "48px", fontWeight: "900" }} color={"#BD0707"} pb={2}>
            Ice Coffee Palm Sugar
          </Typography>
          <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "400" }}>
            Rp.27.000
          </Typography>
          <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "800" }} pt={5} pb={2}>
            Toping
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} gap={4} width={"100%"}>
            <CardToping />
            <CardToping />
            <CardToping />
            <CardToping />
            <CardToping />
            <CardToping />
            <CardToping />
            <CardToping />
          </Stack>
          <Box display={"flex"} justifyContent={"space-between"} py={5}>
            <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "900" }}>
              Total
            </Typography>
            <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "900" }}>
              Rp.27.000
            </Typography>
          </Box>
          <ButtonAddCart />
        </Box>
      </Stack>
    </Landing>
  );
}
