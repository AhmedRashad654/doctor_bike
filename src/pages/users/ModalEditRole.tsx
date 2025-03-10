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

export default function ModalEditRole({
  openModalEditRole,
  setOpenModalEditRole,
}: {
  openModalEditRole: { id: string } | null;
  setOpenModalEditRole: Dispatch<SetStateAction<{ id: string } | null>>;
}) {
  const [selectedRole, setSelectedRole] = useState("");
  const handleClose = () => {
    setSelectedRole("");
    setOpenModalEditRole(null);
  };
  return (
    <Modal keepMounted open={!!openModalEditRole} onClose={handleClose}>
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
        <Person sx={{ fontSize: "120px", color: "primary.main" }} />
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          تعديل دور المستخدم
        </Typography>
        <Select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          displayEmpty
          sx={{ width: "100%", marginBottom: "15px" }}
        >
          <MenuItem value="" disabled>
            اختر دورًا جديدًا
          </MenuItem>
          {["ادمن", "يوزر", "مشرف", "بائع"].map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>

        <Stack direction="row" gap={"10px"}>
          <Button variant="contained" color="primary" disabled={!selectedRole}>
            إضافة الدور
          </Button>

          <Button variant="contained" color="error" disabled={!selectedRole}>
            إزالة الدور
          </Button>

          <Button variant="outlined" onClick={handleClose}>
            إلغاء
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
