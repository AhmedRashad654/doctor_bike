import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function LayoutDashboard() {
  return (
    <Container maxWidth="lg">
      hello
      <Outlet />
    </Container>
  );
}
