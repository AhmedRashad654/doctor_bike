import { Box, Button, CardContent, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useEffect } from "react";
import { ICity } from "../../../types/cities";

export default function FormEditProduct() {
  const { state } = useLocation();
  const { control, handleSubmit, reset } = useForm<ICity>();
  const onSubmit: SubmitHandler<ICity> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (state?.row) {
      reset({
        name_ar: state.row.name_ar || "",
        name_en: state.row.name_en || "",
        name_ab: state.row.name_ab || "",
        deliver: state.row.deliver || "",
      });
    }
  }, [state?.row, reset]);
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: { md: "500px", xs: "340px" },
        boxShadow: 2,
        borderRadius: "20px",
        marginTop: "15px",
      }}
    >
      <CardContent>
        <Stack alignItems="center" spacing={2}>
          <img
            src={logo_Bike}
            alt="logo"
            className="w-[120px] h-[120px] mx-auto"
          />

          <CustomInput
            control={control}
            name="name_ar"
            label="الاسم باللغة العربية"
            placeholder="ادخل الاسم بالعربية"
          />
          <CustomInput
            control={control}
            name="name_en"
            label="الاسم باللغة الانجليزية"
            placeholder="ادخل الاسم باللغة الانجليزية"
          />

          <CustomInput
            control={control}
            name="name_ab"
            label="الاسم باللغة العبرية"
            placeholder="ادخل الاسم باللغة العبرية"
          />
          <CustomInput
            control={control}
            name="deliver"
            label="سعر التوصيل"
            placeholder="ادخل سعر التوصيل"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            تعديل
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
