import { Box, Stack } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import { Home } from "@mui/icons-material";
import CardCount from "./CardCount";
import { cardsCount } from "../../constants/arrays";

export default function Dashboard() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<Home sx={{ fontSize: "40px" }} />}
        text="الرئيسية"
      />
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"30px"}
        flexWrap={"wrap"}
        justifyContent="space-between"
        marginTop={"30px"}
      >
        {cardsCount?.map((item) => (
          <CardCount key={item.name} item={item} />
        ))}
      </Stack>
    </Box>
  );
}
