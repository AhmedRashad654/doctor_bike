import { ListItemIcon, Stack, Typography } from "@mui/material";
import { JSX } from "react";

function HeaderDashboard({ Icon, text }: { Icon: JSX.Element; text: string }) {
  return (
    <Stack direction="row" alignItems={"center"}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <Typography variant="h4">{text}</Typography>
    </Stack>
  );
}

export default HeaderDashboard;
