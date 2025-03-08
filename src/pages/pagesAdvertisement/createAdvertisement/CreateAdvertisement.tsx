import { Box, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import FormCreateSubCategory from "./FormCreateAdvertisement";
export default function CreateAdvertisement() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<AddCircleOutlineIcon sx={{ fontSize: "40px" }} />}
        text={"انشاء اعلان"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormCreateSubCategory />
      </Stack>
    </Box>
  );
}
