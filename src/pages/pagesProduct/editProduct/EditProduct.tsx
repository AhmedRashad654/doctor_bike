import { Box, Stack } from "@mui/material";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import EditIcon from "@mui/icons-material/Edit";
import FormEditProduct from "./FormEditProduct";

export default function EditProduct() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<EditIcon sx={{ fontSize: "40px" }} />}
        text={"تعديل  منتج"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormEditProduct />
      </Stack>
    </Box>
  );
}
