import { Box, Stack, Typography } from "@mui/material";
import logodelete from "../../assets/svg/delete.svg";
import { IOrder } from "../../libs/interface/order";

export default function CardCheckOut(props: Readonly<IOrder>) {
  return (
    <Stack>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <img
          src={props.picture}
          alt="product"
          width={"80px"}
          height={"80px"}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "900" }} color={"#BD0707"} pb={"13px"}>
              Ice Coffe Palm Sugar
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }} color={"#BD0707"}>
              Toping : Bill Berry Boba, Bubble Tea Gelatin
            </Typography>
          </Box>
          <Box textAlign={"right"}>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }} color={"#BD0707"} pb={"13px"}>
              Rp.33.000
            </Typography>
            <img src={logodelete} width={"20px"} height={"20px"} />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
