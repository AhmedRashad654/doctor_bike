import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export type ToastType = "success" | "error" | "warning" | "info";

export function useToast() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("success");

  const showToast = (msg: string, toastType: ToastType = "success") => {
    setMessage(msg);
    setType(toastType);
    setOpen(true);
  };

  const handleClose = (_: Event | React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const ToastComponent = (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity={type} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );

  return { showToast, ToastComponent };
}
