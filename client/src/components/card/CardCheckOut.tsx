import { Box, Stack, Typography } from "@mui/material";
import logodelete from "../../assets/svg/delete.svg";

export default function CardCheckOut() {
  return (
    <Stack>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <img
          src="https://s3-alpha-sig.figma.com/img/4348/8c71/4273019eb029d3a34583371f7000ecba?Expires=1699833600&Signature=A7zFnStM~2lnmMkio-~eYdJOpVUdHLp~D3coUjapbyB2e0~XVVevlnaW2QSI3hTPZAf0ejDcbS0-i0O4~A2TFjvYCMQVWgjWF8i1IVExENDBHyYDG5ZtbkO5-PNeJ9rPQUkjOhF5YqM2ks~XzVaZkPcqXT7dVyuhskiUdQEKBFkcohUL37zHWr1bFcASxtc4waUPWEfgNLTM5ceo5FKeyoWNTYyiOn9AObptMBSBusHtjdmLyjaNI~xCAtTbGTAxwOnuO3fvNORw0D7xkpn20j6LxQrDlNuCwKHUu7kKLG-KlZPbufa6rHdmrtV8jgJnfzE-XR2d--UHc-ppkGMlow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
