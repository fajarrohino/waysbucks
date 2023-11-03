import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

export default function CardOrder() {
  return (
    <Card sx={{ maxWidth: 241, maxHeight: 392 }}>
      <CardActionArea sx={{ backgroundColor: "#F6DADA" }}>
        <CardMedia
          component="img"
          height="312"
          image="https://s3-alpha-sig.figma.com/img/4348/8c71/4273019eb029d3a34583371f7000ecba?Expires=1699833600&Signature=A7zFnStM~2lnmMkio-~eYdJOpVUdHLp~D3coUjapbyB2e0~XVVevlnaW2QSI3hTPZAf0ejDcbS0-i0O4~A2TFjvYCMQVWgjWF8i1IVExENDBHyYDG5ZtbkO5-PNeJ9rPQUkjOhF5YqM2ks~XzVaZkPcqXT7dVyuhskiUdQEKBFkcohUL37zHWr1bFcASxtc4waUPWEfgNLTM5ceo5FKeyoWNTYyiOn9AObptMBSBusHtjdmLyjaNI~xCAtTbGTAxwOnuO3fvNORw0D7xkpn20j6LxQrDlNuCwKHUu7kKLG-KlZPbufa6rHdmrtV8jgJnfzE-XR2d--UHc-ppkGMlow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="green iguana"
          sx={{
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
          <Typography sx={{ fontSize: "18px", fontWeight: "900" }} color={"#BD0707"}>
            Ice Coffee Palm Sugar
          </Typography>
          <Typography color="#974A4A" sx={{ fontSize: "14px", fontWeight: "400" }} pt={"6px"}>
            Rp.27.000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
