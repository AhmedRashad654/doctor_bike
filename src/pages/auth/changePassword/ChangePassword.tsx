import { Button, Stack, Typography } from "@mui/material";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IChangePassword } from "../../../types/user";
import CustomInput from "../../../componant/shared/CustomInput";

export default function ChangePassword() {
  const navigate = useNavigate();
  const userOTP = useAppSelector((state) => state?.user?.otp);
  const { control, handleSubmit } = useForm<IChangePassword>();
  // check enable change password
  useEffect(() => {
    if (!userOTP?.enabaleChangePassword) {
      navigate("/");
    }
  }, [navigate, userOTP?.enabaleChangePassword]);

  // handle change password
  const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
    console.log(data);
    // const response = await changePasswordUser(data);
  };
  if (!userOTP?.enabaleChangePassword) return;
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
        <Typography variant="h4"> تغيير كلمة المرور</Typography>

        <CustomInput
          control={control}
          name="password"
          label="كلمة المرور"
          placeholder="ادخل كلمة المرور"
          type="password"
          rules={{
            required: "كلمة المرور مطلوبة",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$/,
              message:
                "يجب أن تحتوي كلمة المرور على حرف كبير وصغير ورقم ورمز، وأن تكون 8 أحرف على الأقل",
            },
          }}
        />
        <CustomInput
          control={control}
          name="confirmPassword"
          label="تاكيد كلمة المرور"
          placeholder="ادخل تاكيد كلمة المرور"
          type="password"
          rules={{
            required: "تأكيد كلمة المرور مطلوب",
            validate: (value: string) =>
              value === control._formValues.password ||
              "كلمة المرور غير متطابقة",
          }}
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
          تغيير كلمة المرور
        </Button>
      </Stack>
    </Stack>
  );
}
