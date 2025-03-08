import { Box } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import InputSearch from "../../componant/shared/InputSearch";
import { useState } from "react";
import TableComments from "./TableComments";
import CommentIcon from "@mui/icons-material/Comment";
export default function Comments() {
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  return (
    <Box>
      <HeaderDashboard
        Icon={<CommentIcon sx={{ fontSize: "40px" }} />}
        text={"التعليقات"}
      />
      <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TableComments />
    </Box>
  );
}
