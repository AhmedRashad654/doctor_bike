import { Button, Stack, TextField, Typography } from "@mui/material";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
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
        <Typography variant="h4"> تغيير كلمة المرور</Typography>

        <TextField
          label="كلمة المرور"
          type="password"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="تاكيد كلمة المرور"
          type="password"
          variant="outlined"
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
          onClick={() => navigate("/")}
        >
          تغيير كلمة المرور
        </Button>
      </Stack>
    </Stack>
  );
}

export default ChangePassword;
