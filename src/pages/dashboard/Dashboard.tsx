import { Box } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import { Home } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <Box sx={{}}>
      <HeaderDashboard
        Icon={<Home sx={{ fontSize: "40px" }} />}
        text="الرئيسية"
      />
    </Box>
  );
}
