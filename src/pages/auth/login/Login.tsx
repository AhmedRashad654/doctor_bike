import { Button, Stack, Typography } from "@mui/material";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../componant/shared/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginUser } from "../../../types/user";
import { LoginUser } from "../../../services/auth/auth";
import { useToast } from "../../../componant/hooks/useToast";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setUser } from "../../../redux/features/userSlice";
import { useEffect } from "react";
export default function Login() {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state?.user?.data);
  // handle login
  const { showToast, ToastComponent } = useToast();
  const { control, handleSubmit } = useForm<ILoginUser>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<ILoginUser> = async (data) => {
    const response = await LoginUser(data, showToast);
    if (response) {
      dispatch(setUser(response?.data?.user));
    }
  };
  // protected Routed
  useEffect(() => {
    if (user?.id !== "") {
      navigate("/dashboard");
    }
  }, [navigate, user?.id]);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "100vh" }}
    >
      {ToastComponent}
      <Stack
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: { md: "450px", xs: "340px" } }}
        alignItems={"center"}
        gap={"20px"}
      >
        <img src={logo_Bike} alt="logo" className="w-[150px] h-[150px]" />
        <Typography variant="h4">مرحبا بعودتك !</Typography>
        <CustomInput
          control={control}
          name="email"
          label="البريد الالكتروني"
          placeholder="ادخل البريد الالكتروني"
          type="email"
          rules={{ required: "البريد الالكتروني مطلوب" }}
        />
        <CustomInput
          control={control}
          name="password"
          label="كلمة المرور"
          placeholder="ادخل كلمة المرور"
          type="password"
          rules={{ required: "كلمة المرور مطلوبة" }}
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
          type="submit"
          sx={{
            width: "100%",
            backgroundColor: "primary.main",
            color: "white",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          تسجيل الدخول
        </Button>
      </Stack>
    </Stack>
  );
}
