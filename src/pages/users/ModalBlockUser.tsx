import { Button, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";
import { Person } from "@mui/icons-material";
export default function ModalBlockUser({
  openModalBlock,
  setOpenModalBlock,
}: {
  openModalBlock: { id: number; isActived: boolean } | null;
  setOpenModalBlock: Dispatch<
    SetStateAction<{ id: number; isActived: boolean } | null>
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
          {openModalBlock?.isActived
            ? "هل انت متاكد من رغبتك بحظر هذا المستخدم"
            : "هل انت متاكد من رغبتك باعدة نشاط هذا المستخدم"}
        </Typography>

        <Stack direction="row" gap={"10px"} mt="10px">
          <Button
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              fontSize: "1.1rem",
            }}
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
