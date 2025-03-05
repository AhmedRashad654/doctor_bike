import { Box, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import FormCreateCities from "./FormCreateCities";

export default function CreateCities() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<AddCircleOutlineIcon sx={{ fontSize: "40px" }} />}
        text={"اضافة مدينة جديدة"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormCreateCities />
      </Stack>
    </Box>
  );
}


