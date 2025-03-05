import { Box } from "@mui/material";
import TableMainCategory from "./TableMainCategory";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import InputSearch from "../../../componant/shared/InputSearch";
function MainCategory() {
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  return (
    <Box>
      <HeaderDashboard
        Icon={<CategoryIcon sx={{ fontSize: "40px" }} />}
        text={"الفئات الرئيسية"}
      />
      <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />

      <TableMainCategory />
    </Box>
  );
}

export default MainCategory;
