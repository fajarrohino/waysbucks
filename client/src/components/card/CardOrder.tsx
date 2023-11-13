import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IOrder } from "../../libs/interface/order";

export default function CardOrder(props: Readonly<IOrder>) {
  return (
    <Card sx={{ maxWidth: "241px", maxHeight: "392px" }}>
      <CardActionArea sx={{ backgroundColor: "#F6DADA" }}>
        <CardMedia component={"img"} image={props.picture} sx={{ borderRadius: "10px", objectFit: "cover", width: "241px", height: "312px" }} />
        <CardContent>
          <Link to={`/order/${props.id}`} style={{ textDecoration: "none" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "900" }} color={"#BD0707"}>
              {props.name}
            </Typography>
          </Link>
          <Typography color="#974A4A" sx={{ fontSize: "14px", fontWeight: "400" }} pt={"6px"}>
            Rp. {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
