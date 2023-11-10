import { Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import cart from "../../assets/svg/cart.svg";
import waysbucks from "../../assets/svg/logo.svg";

export default function NavbarLogin() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link to="/">
        <Avatar src={waysbucks} sx={{ width: 80, height: 80 }} />
      </Link>
      <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
        <Link to="/cart">
          <img src={cart} width={30} height={30} />
        </Link>
        <Link to="/profil">
          <Avatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" sx={{ width: 60, height: 60 }} />
        </Link>
      </Box>
    </Box>
  );
}
