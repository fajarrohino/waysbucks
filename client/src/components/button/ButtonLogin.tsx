import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ButtonLogin() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} variant="outlined" color="error" sx={{ borderRadius: 2, width: 125, fontWeight: "bold" }}>
        Login
      </Button>

      <Modal keepMounted open={open} onClose={handleClose} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Modal Login
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Form login
          </Typography>
          <Box py={2}>
            <Link to="/detail">
              <Button variant="contained" color="error" fullWidth>
                Product
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
