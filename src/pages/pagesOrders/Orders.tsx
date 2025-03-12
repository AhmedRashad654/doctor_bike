import { Box } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import { useSearchParams } from "react-router-dom";
import TableUsers from "./TableOrders";
import { useEffect, useState } from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PendingIcon from "@mui/icons-material/Pending";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchByCity from "./SearchByCity";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCity } from "../../redux/features/citySlice";
import { useQuery } from "@tanstack/react-query";
import { GetOrdersByStatusAndCity } from "../../services/ordersApi/ordersApi";

export default function Orders() {
  const [searchParams] = useSearchParams();
  const [valueSearch, setValueSearch] = useState<number>(0);
  const status = searchParams.get("status");
  const page = Number(searchParams.get("page"));

  //redux for get city
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state?.city);
  useEffect(() => {
    if (city.status === "idle") {
      dispatch(fetchCity());
    }
  }, [city.status, dispatch]);

  // get orders
  const { data, isLoading } = useQuery({
    queryKey: ["GetOrdersByStatusAndCity", status, page, valueSearch],
    queryFn: () => GetOrdersByStatusAndCity(status, page, valueSearch),
    enabled: !!status || !!page,
  });

  return (
    <Box>
      <HeaderDashboard
        Icon={
          status === "Pending" ? (
            <PendingIcon sx={{ fontSize: "40px" }} />
          ) : status === "Done" ? (
            <FactCheckIcon sx={{ fontSize: "40px" }} />
          ) : status === "Canceled" ? (
            <CancelIcon sx={{ fontSize: "40px" }} />
          ) : status === "New" ? (
            <FiberNewIcon sx={{ fontSize: "40px" }} />
          ) : undefined
        }
        text={
          status === "Pending"
            ? "الطلبات الجارية"
            : status === "Done"
            ? "الطلبات المكتملة"
            : status === "Canceled"
            ? "ألطلبات الملغية"
            : status === "New"
            ? "ألطلبات الجديدة"
            : ""
        }
      />
      <SearchByCity
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
        options={city?.data}
      />
      <TableUsers
        orders={data?.data}
        isLoading={isLoading}
        valueSearch={valueSearch}
      />
    </Box>
  );
}
