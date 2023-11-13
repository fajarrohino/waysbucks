import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { IOrder } from "../../libs/interface/order";
import { Link } from "react-router-dom";

export default function CardOrder(props: IOrder) {
  if (props.loading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: "242px", md: "241px" }, maxHeight: { xs: "100%", sm: 392, md: 392 } }}>
      <CardActionArea sx={{ backgroundColor: "#F6DADA" }}>
        <CardMedia
          component="img"
          image={props.picture}
          alt="green iguana"
          sx={{
            height: "300px",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            objectFit: "cover",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        />
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
