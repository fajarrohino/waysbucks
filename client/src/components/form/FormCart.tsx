import { FormControl, TextField } from "@mui/material";
import ButtonPay from "../button/ButtonPay";

export default function FormCart() {
  return (
    <>
      <FormControl>
        <TextField id="outlined-basic" label="Name" variant="outlined" color="error" margin="normal" />
        <TextField id="outlined-basic" label="Email" variant="outlined" color="error" margin="normal" />
        <TextField id="outlined-basic" label="Phone" variant="outlined" color="error" margin="normal" />
        <TextField id="outlined-basic" label="Pos Code" variant="outlined" color="error" margin="normal" />
        <TextField id="outlined-basic" multiline label="Address" variant="outlined" color="error" margin="normal" />
      </FormControl>
      <ButtonPay />
    </>
  );
}
