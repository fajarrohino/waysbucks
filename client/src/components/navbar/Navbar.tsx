import { Avatar, Box } from "@mui/material";
import waysbucks from "../../assets/svg/logo.svg";
import ButtonLogin from "../button/ButtonLogin";
import ButtonRegister from "../button/ButtonRegister";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Avatar src={waysbucks} sx={{ width: 80, height: 80 }} />
      <Box sx={{ display: "flex", gap: 5 }}>
        <ButtonLogin />
        <ButtonRegister />
      </Box>
    </Box>
  );
}
