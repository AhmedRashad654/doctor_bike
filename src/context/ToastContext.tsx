import { createContext, ReactNode, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export type ToastType = "success" | "error" | "warning" | "info";

const ToastContext = createContext<{
  showToast: (message: string, type?: ToastType) => void;
} | null>(null);

const ToastProvider = ({ children }: { children: ReactNode }) => {
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

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
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
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
