import { Box, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import FormCreateSubCategory from "./FormCreateSubCategory";
function CreateSubCategory() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<AddCircleOutlineIcon sx={{ fontSize: "40px" }} />}
        text={"انشاء فئة رئيسية"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormCreateSubCategory />
      </Stack>
    </Box>
  );
}

export default CreateSubCategory;
