import { FormControl, Stack, TextField } from "@mui/material";
import ButtonPay from "../button/ButtonPay";

export default function FormCart() {
  return (
    <Stack gap={3}>
      <FormControl sx={{ width: "100%", gap: 3 }}>
        <TextField id="outlined-basic" label="Name" variant="outlined" color="error" sx={{ height: "50px" }} />
        <TextField id="outlined-basic" label="Email" variant="outlined" color="error" sx={{ height: "50px" }} />
        <TextField id="outlined-basic" label="Phone" variant="outlined" color="error" sx={{ height: "50px" }} />
        <TextField id="outlined-basic" label="Pos Code" variant="outlined" color="error" sx={{ height: "50px" }} />
        <TextField id="outlined-basic" label="Address" variant="outlined" color="error" multiline rows={4} />
      </FormControl>
      <ButtonPay />
    </Stack>
  );
}
