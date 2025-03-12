import { Button, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Person } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setLogout } from "../../redux/features/userSlice";
export default function ModalForLogout({
  openModalForLogout,
  setOpenModalForLogout,
}: {
  openModalForLogout: boolean;
  setOpenModalForLogout: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    setOpenModalForLogout(false);
  };
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <Modal keepMounted open={openModalForLogout} onClose={handleClose}>
      <Stack
        alignItems={"center"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "340px",
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: "25px",
          padding: "10px",
        }}
      >
        <Person sx={{ fontSize: "120px", color: "primary.main" }} />
        <Typography
          variant="h6"
          sx={{ color: "primary.main", textAlign: "center" }}
        >
          هل انت متاكد من رغبتك بتسجيل الخروج
        </Typography>

        <Stack direction="row" gap={"10px"} mt="10px">
          <Button
            sx={{
              backgroundColor: "error.main",
              color: "white",
              fontSize: "1.1rem",
            }}
            onClick={handleLogout}
          >
            تاكيد
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              fontSize: "1.1rem",
              border: "1px solid #777",
            }}
          >
            الغاء
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
