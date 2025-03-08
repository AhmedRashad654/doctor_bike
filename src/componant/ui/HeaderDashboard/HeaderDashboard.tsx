import { ListItemIcon, Stack, Typography } from "@mui/material";
import { JSX } from "react";

function HeaderDashboard({
  Icon,
  text,
}: {
  Icon: JSX.Element | undefined;
  text: string;
}) {
  return (
    <Stack direction="row" alignItems={"center"} sx={{ marginBottom: "10px" }}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <Typography variant="h5">{text}</Typography>
    </Stack>
  );
}

export default HeaderDashboard;
