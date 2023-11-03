import { Box, Stack } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}
export default function LandingHome({ children }: Props) {
  return (
    <Stack m={8}>
      <Navbar />
      <Box margin="0 auto" py={5} width={"90%"}>
        {children}
      </Box>
    </Stack>
  );
}
