import { Box } from "@mui/material";
import { IOrder } from "../../libs/interface/order";

export default function CardPicture(props: IOrder) {
  return (
    <Box
      sx={{
        transition: "transform 0.3s ease",
        ":hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <img src={props.picture} width={"436px"} height={"555px"} alt="green iguana" style={{ objectFit: "cover", borderRadius: "10px" }} />
    </Box>
  );
}
