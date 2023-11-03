import { Box, Typography } from "@mui/material";

export default function Jumbotron() {
  return (
    <Box>
      <Box sx={{ maxWidth: "958px", maxHeight: "400px", backgroundColor: "#BD0707", color: "white", borderRadius: "10px" }} p={8}>
        <Box display={"flex"}>
          <Box>
            <Typography sx={{ fontSize: "60px", fontWeight: "900" }}>WAYSBUCKS</Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: "300" }} py={3}>
              Things are changing, but we're still here for you
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "400", width: "500px" }}>
              We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available.
            </Typography>
            <Typography pt={3}>Let's Order...</Typography>
          </Box>
          <Box
            position={"absolute"}
            right={100}
            sx={{
              transition: "transform 0.3s ease",
              ":hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/f030/f66f/4fe88ea0871b9f90f3bd425e6abf5f58?Expires=1699833600&Signature=JOC6WaFAWvxSbXjVzi3j2MZ3x93zDWtEIFcHmimOxYCF~2TtF1ruaNKFlPuKrJMoKa~AvI5W2nns9WDNfAVY2Y27GqhxhqTCcHcvtFs-O4XuUCzxNZLNgHmJNYeozR8B4BfrrOCCvnU-JZ3vgiN0AdN14-ZWXgqKmQWs9ICJmVYxjEb~nG5mdl0CorjAqpkMz~44Fe5zx8kJR7Eu2s2qciOr7l4x1Effj5f6OzzkiiHmLv39lUe1HPT6qXR2na3unwvfLafX7RnFvEzg2VtWsQQwTapyt00YaXssisoEh0k8bqwUrQr7k9bA05akF-IH2t79enxTa6fz4uwU3DYR1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="waysbuck"
              width={"451px"}
              height={"324px"}
              style={{
                objectFit: "cover",
                borderStartEndRadius: "10px",
                borderEndEndRadius: "10px",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
