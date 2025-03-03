import { Box, Stack, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/sidebar/Sidebar";

export default function LayoutDashboard() {
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");
  return (
    <Stack direction={"row"} gap={"20px"} sx={{ overflowX: "hidden" }}>
      <Sidebar />
      <Box
        sx={{
          width: !isSmallScreen ? "calc(100vw - 300px)" : "100%",
          marginRight: !isSmallScreen ? "270px" : "",
          padding: "20px 20px",
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
}
