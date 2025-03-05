import { Box, Stack } from "@mui/material";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import EditIcon from "@mui/icons-material/Edit";
import FormEditSubCategory from "./FormEditSubCategory";

function EditSubCategory() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<EditIcon sx={{ fontSize: "40px" }} />}
        text={"تعديل فئة رئيسية"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormEditSubCategory />
      </Stack>
    </Box>
  );
}

export default EditSubCategory;
