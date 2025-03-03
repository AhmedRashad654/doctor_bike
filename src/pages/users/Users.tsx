import { Box, InputAdornment, TextField } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import { People, Search } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import TableUsers from "./TableUsers";
import { useState } from "react";

function Users() {
  const [searchParams] = useSearchParams();
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  const user = searchParams.get("user");
  return (
    <Box>
      <HeaderDashboard
        Icon={<People sx={{ fontSize: "40px" }} />}
        text={
          user === "sectoral"
            ? "المستخدمين القطاعي"
            : user === "sentence"
            ? "مستخدمين الجملة"
            : ""
        }
      />
      <TextField
        variant="standard"
        placeholder=" ابحث..."
        value={valueSearch}
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
      <TableUsers />
    </Box>
  );
}

export default Users;
