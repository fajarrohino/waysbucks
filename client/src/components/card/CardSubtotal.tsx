import { Box, Divider, Typography } from "@mui/material";

export default function CardSubtotal() {
  return (
    <Box py={5}>
      <Divider sx={{ borderWidth: 1, borderColor: "#974A4A" }} />

      <Box display={"flex"} justifyContent={"space-between"} width={"100%"} py={2}>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }} color={"#BD0707"} pb={"13px"}>
            Subtotal
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }} color={"#BD0707"}>
            Qty
          </Typography>
        </Box>
        <Box textAlign={"right"}>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }} color={"#BD0707"} pb={"13px"}>
            Rp.69.000
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }} color={"#BD0707"}>
            2
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderWidth: 1, borderColor: "#974A4A" }} />
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"} py={2}>
        <Typography sx={{ fontSize: "14px", fontWeight: "800" }} color={"#BD0707"} pb={"13px"}>
          Total
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: "800" }} color={"#BD0707"} pb={"13px"}>
          69.000
        </Typography>
      </Box>
    </Box>
  );
}
