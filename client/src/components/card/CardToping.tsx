import { Avatar, Stack, Typography } from "@mui/material";
import { IToping } from "../../libs/interface/order";

export default function CardToping(props: IToping) {
  return (
    <Stack alignItems={"center"} spacing={"13px"}>
      <Avatar
        src={props.picture}
        sx={{
          width: 85,
          height: 75,
          transition: "transform 0.3s ease",
          ":hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      <Typography color="#BD0707" sx={{ fontSize: "14px", fontWeight: "400" }} pt={"6px"}>
        {props.name}
      </Typography>
    </Stack>
  );
}
