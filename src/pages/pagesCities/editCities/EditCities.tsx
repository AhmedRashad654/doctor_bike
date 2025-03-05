import { Box, Stack } from "@mui/material";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import EditIcon from "@mui/icons-material/Edit";
import FormEditCities from "./FormEditCities";

export default function EditCities() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<EditIcon sx={{ fontSize: "40px" }} />}
        text={"تعديل  مدينة"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormEditCities />
      </Stack>
    </Box>
  );
}
