import { Button, Stack, Typography } from "@mui/material";
import OTPInput from "react-otp-input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerificationCode() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate()
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        width: "100%",
        paddingY: "20px",
        minHeight: "100vh",
      }}
    >
      <Stack
        gap={"20px"}
        alignItems={"center"}
        sx={{
          padding: 4,
          width: { md: "450px", xs: "350px" },
        }}
      >
        <Stack gap={"10px"} alignItems={"center"}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            التحقق من OTP
          </Typography>
          <Typography variant="h6">رجاء ادخال رمز التحقق</Typography>
        </Stack>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: "70px",
                height: "70px",
                margin: "10px",
                boxShadow: "5px 1px 24px -7px rgba(0,0,0,0.59)",
                borderRadius: "10px",
                fontSize: "24px",
                textAlign: "center",
                fontWeight: "bold",
                outline: "none",
                color: "black",
              }}
            />
          )}
        />
        <Button
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100%",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
          onClick={()=>navigate("/verifictionSuccess")}
        >
          تحقق
        </Button>
        <Stack alignItems={"center"} gap={"5px"}>
          <Typography variant="h6">لم يصبلك رمز التحقق ؟</Typography>

          {timeLeft > 0 ? (
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {" "}
              إعادة الإرسال خلال 00:
              {timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </Typography>
          ) : (
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              أعد الإرسال الآن
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
