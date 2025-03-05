import { Box, Stack } from "@mui/material";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import EditIcon from "@mui/icons-material/Edit";
import FormEditMainCategory from "./FormEditMainCategory";
function EditMainCategory() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<EditIcon sx={{ fontSize: "40px" }} />}
        text={"تعديل فئة رئيسية"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormEditMainCategory />
      </Stack>
    </Box>
  );
}

export default EditMainCategory;
