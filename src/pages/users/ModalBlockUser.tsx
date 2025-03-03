import { Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";
import { Person } from "@mui/icons-material";
export default function ModalBlockUser({
  openModalBlock,
  setOpenModalBlock,
}: {
  openModalBlock: { id: number; isBlocked: boolean } | null;
  setOpenModalBlock: Dispatch<
    SetStateAction<{ id: number; isBlocked: boolean } | null>
  >;
}) {
  const handleClose = () => {
    setOpenModalBlock(null);
  };
  return (
    <Modal keepMounted open={!!openModalBlock?.id} onClose={handleClose}>
      <Stack
        alignItems={"center"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: "25px",
          padding: "20px",
        }}
      >
        <Person />
        <Typography variant="h4" sx={{ color: "primary.main" }}>
          cangratulations
        </Typography>

        <Typography sx={{ color: "secondary.main" }} variant="h6">
          passed
        </Typography>
      </Stack>
    </Modal>
  );
}
