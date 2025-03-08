import { Box } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import { People } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import TableUsers from "./TableUsers";
import { useState } from "react";
import InputSearch from "../../componant/shared/InputSearch";

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
      <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TableUsers />
    </Box>
  );
}

export default Users;
