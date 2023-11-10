import { Box, Stack, Typography } from "@mui/material";
import Landing from "../layouts/Landing";
import CardPicture from "../components/card/CardPicture";
import CardToping from "../components/card/CardToping";
import ButtonAddCart from "../components/button/ButtonAddCart";
import { IOrder, IToping } from "../libs/interface/order";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [order, setOrder] = useState<IOrder[]>([]);
  const [toping, setToping] = useState<IToping[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch("https://api.npoint.io/c53fb9c69e3638e406a6");
        const data = await response.json();
        const orderId = data.findIndex((order: IOrder) => order.id === Number(id));
        // setOrder(orderId);
        console.log("this fetch data order", orderId);

        if (orderId !== -1) {
          setOrder([data[orderId]]);
          console.log("this data by ID :", data[orderId]);
        } else {
          console.log("not found");
        }
      } catch (error) {
        console.log("fetch error", error);
      }
    };

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
    fetchOrder(), fetchToping();
  }, [id]);

  return (
    <Landing>
      <Stack display={"flex"} direction={"row"} gap={10}>
        <CardPicture picture={order.length > 0 && order[0].picture} />
        <Box width={"576px"}>
          <Typography sx={{ fontSize: "48px", fontWeight: "900" }} color={"#BD0707"} pb={2}>
            {order.length > 0 && order[0].name}
          </Typography>
          <Typography color="#974A4A" sx={{ fontSize: "24px", fontWeight: "400" }}>
            Rp. {order.length > 0 && order[0].price}
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
              Rp.27.000
            </Typography>
          </Box>
          <ButtonAddCart />
        </Box>
      </Stack>
    </Landing>
  );
}
