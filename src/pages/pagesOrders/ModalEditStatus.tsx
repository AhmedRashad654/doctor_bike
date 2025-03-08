import { Person } from "@mui/icons-material";
import {
  Modal,
  Stack,
  Typography,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

export default function ModalEditStatus({
  openModalEditStatus,
  setOpenModalEditStatus,
}: {
  openModalEditStatus: { id: number; currentStatus: string } | null;
  setOpenModalEditStatus: Dispatch<
    SetStateAction<{ id: number; currentStatus: string } | null>
  >;
}) {
  const [selectedRole, setSelectedRole] = useState("");
  const handleClose = () => {
    setSelectedRole("");
    setOpenModalEditStatus(null);
  };
  return (
    <Modal keepMounted open={!!openModalEditStatus} onClose={handleClose}>
      <Stack
        alignItems="center"
        gap={"5px"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "340px",
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: "25px",
          padding: "15px",
        }}
      >
        <Person
          sx={{
            fontSize: "120px",
            color: "primary.main",
            marginBottom: "-15px",
          }}
        />
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          تعديل حالة الاوردر
        </Typography>
        <Select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          displayEmpty
          sx={{ width: "100%", marginBottom: "15px" }}
        >
          <MenuItem value="" disabled>
            اختر الحالة الجديدة
          </MenuItem>
          {["جاري", "مكتمل", "الغاء"].map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>

        <Stack direction="row" gap={"10px"}>
          <Button variant="contained" color="primary" disabled={!selectedRole}>
            تعديل الحالة
          </Button>

          <Button variant="outlined" onClick={handleClose}>
            إلغاء
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
