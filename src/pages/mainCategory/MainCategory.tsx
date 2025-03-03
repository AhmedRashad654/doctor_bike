import { Box, InputAdornment, TextField } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import TableMainCategory from "./TableMainCategory";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";
import { Search } from "@mui/icons-material";
function MainCategory() {
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  return (
    <Box>
      <HeaderDashboard
        Icon={<CategoryIcon sx={{ fontSize: "40px" }} />}
        text={"الفئات الرئيسية"}
      />
      <TextField
        variant="standard"
        placeholder=" ابحث..."
        value={valueSearch || ""}
        onChange={(e) => setValueSearch(e.target.value)}
        sx={{
          maxWidth: 300,
          marginBottom: "20px",
          "& .MuiInputBase-root": {
            fontSize: "1.1rem",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "gray",
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "gray",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="disabled" />
            </InputAdornment>
          ),
        }}
      />
      <TableMainCategory />
    </Box>
  );
}

export default MainCategory;
