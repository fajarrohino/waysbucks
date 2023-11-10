import { Avatar, Stack, Typography } from "@mui/material";
import { IToping } from "../../libs/interface/order";

export default function CardToping(props: IToping) {
  return (
    <Stack spacing={"13px"} width={"120px"} display={"flex"} alignItems={"center"}>
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
      <Typography color="#BD0707" sx={{ fontSize: "14px", fontWeight: "400" }} pt={"6px"} textAlign={"center"}>
        {props.name}
      </Typography>
    </Stack>
  );
}
