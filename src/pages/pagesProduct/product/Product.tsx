import { Box } from "@mui/material";
import { useState } from "react";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import InputSearch from "../../../componant/shared/InputSearch";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TableProduct from "./TableProduct";


export default function Product() {
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  return (
    <Box>
      <HeaderDashboard
        Icon={<LocationCityIcon sx={{ fontSize: "40px" }} />}
        text={"المنتجات"}
      />

      <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TableProduct />
    </Box>
  );
}
