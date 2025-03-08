import { Box, Stack } from "@mui/material";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import EditIcon from "@mui/icons-material/Edit";
import FormEditAdvertisement from "./FormEditAdvertisement";

export default function EditAdvertisement() {
  return (
    <Box>
      <HeaderDashboard
        Icon={<EditIcon sx={{ fontSize: "40px" }} />}
        text={"تعديل أعلان"}
      />
      <Stack alignItems={"center"} justifyContent={"center"} minHeight={"80vh"}>
        <FormEditAdvertisement />
      </Stack>
    </Box>
  );
}
