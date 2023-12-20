import { Box, Divider, Stack, Typography } from "@mui/material";
import CardCheckOut from "../components/card/CardCheckOut";
import CardSubtotal from "../components/card/CardSubtotal";
import FormCart from "../components/form/FormCart";
import Landing from "../layouts/Landing";

export default function Cart() {
  // const stateOrder = useSelector((state: RootState) => state.order);
  // const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  // console.log(stateOrder);
  // useEffect(() => {
  //   dispatch(getOrder());
  // }, [dispatch]);
  return (
    <Landing>
      {/* <Box bgcolor={"aqua"}> */}
      <Typography sx={{ fontSize: "24px", fontWeight: "900" }} color={"#BD0707"} pb={3}>
        My Cart
      </Typography>
      <Typography sx={{ fontSize: "18px", fontWeight: "400" }} color={"#BD0707"} pb={2}>
        Review Your Order
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box width={"700px"}>
          <Divider sx={{ borderWidth: 1, borderColor: "#974A4A" }} />
          <Box py={3} display={"flex"} flexDirection={"column"} gap={3}>
            <CardCheckOut />
            <CardCheckOut />
          </Box>
          <Divider sx={{ borderWidth: 1, borderColor: "#974A4A" }} />
          <CardSubtotal />
        </Box>
        <Box width={"450px"}>
          <FormCart />
        </Box>
      </Stack>
      {/* </Box> */}
    </Landing>
  );
}
