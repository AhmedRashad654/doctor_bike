import { Box, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import FormCreateProduct from "./FormCreateProduct";

export default function CreateProduct() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<AddCircleOutlineIcon sx={{ fontSize: "40px" }} />}
        text={"اضافة منتج جديد"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormCreateProduct />
      </Stack>
    </Box>
  );
}
