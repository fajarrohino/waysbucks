import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Landing from "../layouts/Landing";
import { IToping } from "../libs/interface/order";
import { RootState } from "../store";
import { Stack, Box, Typography } from "@mui/material";
import ButtonAddCart from "../components/button/ButtonAddCart";
import CardPicture from "../components/card/CardPicture";
import CardToping from "../components/card/CardToping";
import { getOrderById } from "../store/order/reducer";

export default function Detail() {
  const [toping, setToping] = useState<IToping[]>([]);

  const { id } = useParams();

  const stateOrder = useSelector((state: RootState) => state.order);
  const stateOrderById = stateOrder.data?.find((order) => order.id === Number(id));
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  console.log("this is state order by id", stateOrderById);

  useEffect(() => {
    dispatch(getOrderById(Number(id)));
    const fetchToping = async () => {
      try {
        const response = await fetch("https://api.npoint.io/6ee29807c464e0cd7e0e");
        const data = await response.json();
        setToping(data);
        console.log("this fetch data toping", data);
      } catch (error) {
        console.log("fetch toping error", error);
      }
    };

    fetchToping();
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
            {toping?.map((item) => (
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
