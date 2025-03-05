import { CardContent, Button, Stack, Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMainCategory } from "../../../types/category";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
export default function FormCreateCities() {
  const { control, handleSubmit } = useForm<IMainCategory>();
  const onSubmit: SubmitHandler<IMainCategory> = (data) => {
    console.log(data);
  };
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
            placeholder="ادخل  سعر التوصيل"
            type="number"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            انشاء
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
