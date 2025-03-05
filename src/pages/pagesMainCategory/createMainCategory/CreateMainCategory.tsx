import { Box, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormCreateMainCategory from "./FormCreateMainCategory";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
function CreateMainCategory() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<AddCircleOutlineIcon sx={{ fontSize: "40px" }} />}
        text={"انشاء فئة رئيسية"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormCreateMainCategory />
      </Stack>
    </Box>
  );
}

export default CreateMainCategory;
