import { Button, Stack, TextField, Typography } from "@mui/material";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "100vh" }}
    >
      <Stack
        sx={{ width: { md: "450px", xs: "340px" } }}
        alignItems={"center"}
        gap={"20px"}
      >
        <img src={logo_Bike} alt="logo" className="w-[150px] h-[150px]" />
        <Typography variant="h4">مرحبا بعودتك !</Typography>
        <TextField
          label="البريد الالكتروني"
          variant="outlined"
          type="email"
          fullWidth
        />
        <TextField
          label="كلمة المرور"
          type="password"
          variant="outlined"
          fullWidth
        />
        <Stack alignContent={"right"} sx={{ width: "100%", mt: "-10px" }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "0.9rem", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => navigate("/forgetPassword")}
          >
            {" "}
            هل نسيت كلمة المرور؟
          </Typography>
        </Stack>
        <Button
          sx={{
            width: "100%",
            backgroundColor: "primary.main",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/dashboard")}
        >
          تسجيل الدخول
        </Button>
      </Stack>
    </Stack>
  );
}

export default Login;
