import { Stack, Typography } from "@mui/material";
import logo_bike from "../../../assets/images/logo_Bike.png";
function HeaderSidebar() {
  return (
    <Stack
      alignItems="center"
      spacing={1}
      sx={{ borderBottom: "1px solid #777", paddingBottom: "10px" }}
    >
      <img alt="logo" src={logo_bike} className="w-[50px]" />
      <Stack alignItems="center">
        <Typography variant="h6"> Ahmed Rashad</Typography>
        <Typography variant="body1" sx={{ color: "primary.main" }}>
          Admin
        </Typography>
      </Stack>
    </Stack>
  );
}

export default HeaderSidebar;
