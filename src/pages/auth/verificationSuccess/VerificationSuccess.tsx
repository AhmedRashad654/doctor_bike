import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";
export default function VerificationSuccess() {
  const navigate = useNavigate();
  const userOTP = useAppSelector((state) => state?.user?.otp);
  useEffect(() => {
    if (!userOTP?.enabaleChangePassword) {
      navigate("/");
    }
  }, [navigate, userOTP?.enabaleChangePassword]);
  if (!userOTP?.enabaleChangePassword) return;
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Stack
        alignItems={"center"}
        gap={"50px"}
        sx={{ width: { md: "450px", xs: "340px" } }}
      >
        <Stack alignItems={"center"} gap={"30px"}>
          <CheckCircleOutlineIcon sx={{ fontSize: "150px", color: "green" }} />
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            تم التحقق بنجاح
          </Typography>
        </Stack>
        <Button
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100%",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
          onClick={() => navigate("/changePassword")}
        >
          التالي
        </Button>
      </Stack>
    </Stack>
  );
}
