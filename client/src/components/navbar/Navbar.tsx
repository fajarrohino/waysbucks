import { Avatar, Box } from "@mui/material";
import waysbucks from "../../assets/svg/logo.svg";
import ButtonLogin from "../button/ButtonLogin";
import ButtonRegister from "../button/ButtonRegister";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link to="/">
        <Avatar src={waysbucks} sx={{ width: 80, height: 80 }} />
      </Link>
      <Box sx={{ display: "flex", gap: 5 }}>
        <ButtonLogin />
        <ButtonRegister />
      </Box>
    </Box>
  );
}
