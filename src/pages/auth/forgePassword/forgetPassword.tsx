import { Button, Stack, TextField, Typography } from "@mui/material";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useNavigate } from "react-router-dom";
function ForgetPassword() {
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
        <Typography variant="h6" sx={{ my: "20px" }}>
          {" "}
          سنقوم بارسال رمز للتحقق علي بريدك الالكتروني
        </Typography>
        <TextField
          label="البريد الالكتروني"
          variant="outlined"
          type="email"
          fullWidth
        />
        <Button
          sx={{
            width: "100%",
            backgroundColor: "primary.main",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/verificationCode")}
        >
          التالي
        </Button>
        <Button
          sx={{
            width: "100%",
            border: "1px solid #777",
            color: "black",
            padding: "10px",
            fontWeight: "bold",
            mt: "-10px",
          }}
          onClick={() => navigate(-1)}
        >
          رجوع
        </Button>
      </Stack>
    </Stack>
  );
}

export default ForgetPassword;
