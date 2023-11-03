import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import NavbarLogin from "../components/navbar/NavbarLogin";

interface Props {
  readonly children: ReactNode;
}
export default function Landing({ children }: Props) {
  return (
    <Stack m={5}>
      <NavbarLogin />
      <Box margin="0 auto" py={5} width={"90%"}>
        {children}
      </Box>
    </Stack>
  );
}
