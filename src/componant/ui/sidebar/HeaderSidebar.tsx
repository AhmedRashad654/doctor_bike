import { Stack, Typography } from "@mui/material";
import logo_bike from "../../../assets/images/logo_Bike.png";
import { useAppSelector } from "../../../redux/hooks";
export default function HeaderSidebar() {
  const user = useAppSelector((state) => state?.user?.data);
  const roles = user?.roles.map((e) => e?.name);
  return (
    <Stack
      alignItems="center"
      spacing={1}
      sx={{ borderBottom: "1px solid #777", paddingBottom: "10px" }}
    >
      <img alt="logo" src={logo_bike} className="w-[50px]" />
      <Stack alignItems="center">
        <Typography variant="h6">{user?.fullName}</Typography>
        <Typography variant="body1" sx={{ color: "primary.main" }}>
          {roles.join(", ")}
        </Typography>
      </Stack>
    </Stack>
  );
}
