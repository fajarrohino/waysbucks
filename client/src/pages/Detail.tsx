import { Box, Stack, Typography } from "@mui/material";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonAddCart from "../components/button/ButtonAddCart";
import CardPicture from "../components/card/CardPicture";
import CardToping from "../components/card/CardToping";
import Landing from "../layouts/Landing";
import { RootState } from "../store";
import { getOrderById } from "../store/order/reducer";
import { getToping } from "../store/toping/action";
import { IToping } from "../libs/interface/order";

export default function Detail() {
  // const [toping, setToping] = useState<IToping[]>([]);

  const { id } = useParams();

  const stateOrder = useSelector((state: RootState) => state.order);
  const stateOrderById = stateOrder.data?.find((order) => order.id === Number(id));
  const dispatchOrder: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  console.log("this is state order by id", stateOrderById);

  const stateToping = useSelector((state: RootState) => state.toping);
  const dispatchToping: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  useEffect(() => {
    dispatchOrder(getOrderById(Number(id)));

    dispatchToping(getToping());
  }, [id]);

  return (
    <Landing>
      <Stack display={"flex"} direction={"row"} gap={10}>
        <CardPicture picture={stateOrderById?.picture} />
        <Box width={"576px"}>
          <Typography sx={{ fontSize: "48px", fontWeight: "900" }} color={"#BD0707"} pb={2}>
            {stateOrderById?.name}
          </Typography>
          <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "400" }}>
            Rp. {stateOrderById?.price}
          </Typography>
          <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "800" }} pt={5} pb={2}>
            Toping
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} gap={4}>
            {stateToping.data?.map((item: IToping) => (
              <CardToping key={item.id} {...item} />
            ))}
          </Stack>
          <Box display={"flex"} justifyContent={"space-between"} py={5}>
            <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "900" }}>
              Total
            </Typography>
            <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "900" }}>
              Rp. 27.000
            </Typography>
          </Box>
          <ButtonAddCart />
        </Box>
      </Stack>
    </Landing>
  );
}
