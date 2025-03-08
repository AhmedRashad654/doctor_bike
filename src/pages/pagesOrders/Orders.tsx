import { Box } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import { useSearchParams } from "react-router-dom";
import TableUsers from "./TableOrders";
import { useState } from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PendingIcon from "@mui/icons-material/Pending";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchByCity from "./SearchByCity";

export default function Orders() {
  const [searchParams] = useSearchParams();
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  const status = searchParams.get("status");
  return (
    <Box>
      <HeaderDashboard
        Icon={
          status === "pending" ? (
            <PendingIcon sx={{ fontSize: "40px" }} />
          ) : status === "completed" ? (
            <FactCheckIcon sx={{ fontSize: "40px" }} />
          ) : status === "cancelled" ? (
            <CancelIcon sx={{ fontSize: "40px" }} />
          ) : undefined
        }
        text={
          status === "pending"
            ? "الطلبات الجارية"
            : status === "completed"
            ? "الطلبات المكتملة"
            : status === "cancelled"
            ? "ألطلبات الملغية"
            : ""
        }
      />
      <SearchByCity
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
        options={["الجيزة", "اسيوط", "القاهرة"]}
      />
      <TableUsers />
    </Box>
  );
}
