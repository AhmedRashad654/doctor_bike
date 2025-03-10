import { Person } from "@mui/icons-material";
import {
  Modal,
  Stack,
  Typography,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRole } from "../../redux/features/rolesSlice";
import { EditOnRole } from "../../services/users/user";
import useToast from "../../componant/hooks/useToast";

export default function ModalEditRole({
  openModalEditRole,
  setOpenModalEditRole,
}: {
  openModalEditRole: { id: string } | null;
  setOpenModalEditRole: Dispatch<SetStateAction<{ id: string } | null>>;
}) {
  // selected role
  const [selectedRole, setSelectedRole] = useState("");

  // hook for show text
  const { showToast } = useToast();

  // close modal
  const handleClose = () => {
    setSelectedRole("");
    setOpenModalEditRole(null);
  };

  // get roles with redux
  const role = useAppSelector((state) => state?.role);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (role?.status === "idle") {
      dispatch(fetchRole());
    }
  }, [dispatch, role?.status]);

  // handle Edit Role
  const handleEditRole = async (type: string) => {
    await EditOnRole(type, openModalEditRole, selectedRole, showToast);
    handleClose();
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
          {role?.data?.map((role) => (
            <MenuItem key={role?.id} value={role?.name}>
              {role?.name}
            </MenuItem>
          ))}
        </Select>

        <Stack direction="row" gap={"10px"}>
          <Button
            variant="contained"
            color="primary"
            disabled={!selectedRole}
            onClick={() => handleEditRole("AddRoleToUser")}
          >
            إضافة الدور
          </Button>

          <Button
            variant="contained"
            color="error"
            disabled={!selectedRole}
            onClick={() => handleEditRole("RemoveRoleFromUser")}
          >
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
