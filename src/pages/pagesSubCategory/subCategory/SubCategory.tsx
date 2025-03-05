import { Box } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import { useState } from "react";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import TableSubCategory from "./TableSubCategory";
import InputSearch from "../../../componant/shared/InputSearch";
import NavbarCategory from "./NavbarCategory";
export default function SubCategory() {
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  return (
    <Box>
      <HeaderDashboard
        Icon={<ClassIcon sx={{ fontSize: "40px" }} />}
        text={"الفئات الثانوية"}
      />
      <NavbarCategory />
      <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TableSubCategory />
    </Box>
  );
}
