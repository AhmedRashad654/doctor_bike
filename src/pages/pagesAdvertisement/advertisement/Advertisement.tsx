import { Box } from "@mui/material";
import { useState } from "react";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import InputSearch from "../../../componant/shared/InputSearch";
import TableAdvertisement from "./TableAdvertisement";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
export default function Advertisement() {
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  return (
    <Box>
      <HeaderDashboard
        Icon={<FeaturedVideoIcon sx={{ fontSize: "40px" }} />}
        text={"الاعلانات"}
      />

      <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TableAdvertisement />
    </Box>
  );
}
