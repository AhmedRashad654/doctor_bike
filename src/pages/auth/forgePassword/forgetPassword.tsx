import { Button, Stack, Typography } from "@mui/material";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginUser } from "../../../types/user";
import CustomInput from "../../../componant/shared/CustomInput";
import { ForgetPasswordUser } from "../../../services/auth/auth";
import { useAppDispatch } from "../../../redux/hooks";
import { setOTP } from "../../../redux/features/userSlice";
import useToast from "../../../componant/hooks/useToast";
function ForgetPassword() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<ILoginUser>();
  // handle forget password
  const onSubmit: SubmitHandler<ILoginUser> = async (data) => {
    const response = await ForgetPasswordUser(data, showToast);
    if (response) {
      dispatch(setOTP(response?.data));
      navigate("/verificationCode")
    }
  };
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "100vh" }}
    >
      <Stack
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: { md: "450px", xs: "340px" } }}
        alignItems={"center"}
        gap={"20px"}
      >
        <img src={logo_Bike} alt="logo" className="w-[150px] h-[150px]" />
        <Typography variant="h6" sx={{ my: "20px" }}>
          {" "}
          سنقوم بارسال رمز للتحقق علي بريدك الالكتروني
        </Typography>
        <CustomInput
          control={control}
          name="email"
          label="البريد الالكتروني"
          placeholder="ادخل البريد الالكتروني"
          type="email"
          rules={{ required: "البريد الالكتروني مطلوب" }}
        />
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
