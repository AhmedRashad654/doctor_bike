import { Box, Button, CardContent, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useEffect } from "react";
import { ICity } from "../../../types/cities";
import { EditAndAddCity } from "../../../services/city/city";
import { useQueryClient } from "@tanstack/react-query";
import useToast from "../../../componant/hooks/useToast";

export default function FormEditCities() {
  const { state } = useLocation();
  const { control, handleSubmit, reset } = useForm<ICity>();

  // query client from reqct-query
  const queryClient = useQueryClient();

  // hook to show text such alert
  const { showToast } = useToast();

  // edit on city
  const onSubmit: SubmitHandler<ICity> = async (data) => {
    const newData: ICity = {
      ...state.row,
      ...data,
      dateUpdate: new Date().toISOString(),
    };
    await EditAndAddCity(newData, queryClient, showToast);
  };
  useEffect(() => {
    if (state?.row) {
      reset({
        cityNameAr: state.row.cityNameAr || "",
        cityNameEng: state.row.cityNameEng || "",
        cityNameAbree: state.row.cityNameAbree || "",
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
            name="cityNameAr"
            label="الاسم باللغة العربية"
            placeholder="ادخل الاسم بالعربية"
            rules={{ required: " الاسم باللغة العربية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="cityNameEng"
            label="الاسم باللغة الانجليزية"
            placeholder="ادخل الاسم باللغة الانجليزية"
            rules={{ required: " الاسم باللغة الانجليزية مطلوب" }}
          />

          <CustomInput
            control={control}
            name="cityNameAbree"
            label="الاسم باللغة العبرية"
            placeholder="ادخل الاسم باللغة العبرية"
            rules={{ required: " الاسم باللغة العبرية مطلوب" }}
          />
          <CustomInput
            control={control}
            type="number"
            step="any"
            name="deliver"
            label="سعر التوصيل"
            placeholder="ادخل سعر التوصيل"
            rules={{ required: "ألسعر مطلوب" }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            تعديل
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
