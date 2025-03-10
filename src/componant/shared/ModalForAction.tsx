import { Button, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Person } from "@mui/icons-material";
import useContextState from "../hooks/useContextState";
export default function ModalForAction({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  const { openModalForAction, setOpenModalForAction } = useContextState();
  const handleClose = () => {
    setOpenModalForAction(null);
  };
  const handleAction = () => {
    action();
    setOpenModalForAction(null);
  };
  return (
    <Modal keepMounted open={!!openModalForAction} onClose={handleClose}>
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
          {text}
        </Typography>

        <Stack direction="row" gap={"10px"} mt="10px">
          <Button
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              fontSize: "1.1rem",
            }}
            onClick={handleAction}
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
