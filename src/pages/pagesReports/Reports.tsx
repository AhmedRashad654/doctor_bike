import { Box } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import ReportIcon from "@mui/icons-material/Report";
import TableReports from "./TableReports";

export default function Reports() {
  // const [valueSearch, setValueSearch] = useState<string>("");
  return (
    <Box>
      <HeaderDashboard
        Icon={<ReportIcon sx={{ fontSize: "40px" }} />}
        text={"البلاغات"}
      />
      {/* <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} /> */}
      <TableReports />
    </Box>
  );
}
