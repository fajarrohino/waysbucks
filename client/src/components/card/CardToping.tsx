import { Avatar, Box, Stack, Typography } from "@mui/material";
import { IToping } from "../../libs/interface/order";
import ceklis from "../../assets/svg/ceklis.svg";
import { useState } from "react";

export default function CardToping(props: IToping) {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <Stack spacing={"13px"} width={"120px"} display={"flex"} alignItems={"center"}>
      <Box display="flex">
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
          onClick={handleClicked}
        />
        {clicked && (
          <Box position="absolute" sx={{ transition: "transform 0.3s ease", ":hover": { transform: "scale(1.1)" } }}>
            <img src={ceklis} alt="ceklis" width={"20px"} />
          </Box>
        )}
      </Box>
      <Typography color="#BD0707" sx={{ fontSize: "14px", fontWeight: "400" }} pt={"6px"} textAlign={"center"}>
        {props.name}
      </Typography>
    </Stack>
  );
}
