import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

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

export default function ButtonRegister() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} variant="contained" color="error" sx={{ borderRadius: 2, width: 125, fontWeight: "bold", boxShadow: "none" }}>
        Register
      </Button>

      <Modal keepMounted open={open} onClose={handleClose} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Modal Register
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Form Register
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
