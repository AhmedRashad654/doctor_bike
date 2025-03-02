import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/sidebar/Sidebar";

export default function LayoutDashboard() {
  return (
    <Stack direction={"row"} gap={"20px"}>
      <Sidebar />
      <Box
        sx={{
          width: { md: "calc(100vw - 300px)", xs: "100%" },
          marginRight: { md: "275px" },
          padding: "40px 5px",
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
}
