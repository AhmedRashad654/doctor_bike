import { CardContent, Button, Stack, Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { ICity } from "../../../types/cities";
import { useQueryClient } from "@tanstack/react-query";
import { EditAndAddCity } from "../../../services/city/city";
import useToast from "../../../componant/hooks/useToast";
export default function FormCreateCities() {
  // query client from reqct-query
  const queryClient = useQueryClient();

  // hook to show text such alert
  const { showToast } = useToast();

  // handle create city
  const { control, handleSubmit } = useForm<ICity>();
  const onSubmit: SubmitHandler<ICity> = async (data) => {
    const newData: ICity = {
      ...data,
      dateAdd: new Date().toISOString(),
      dateUpdate: new Date().toISOString(),
      id: 0,
    };
    await EditAndAddCity(newData, queryClient, showToast);
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
            name="deliver"
            type="number"
            step="any"
            label="سعر التوصيل"
            placeholder="ادخل  سعر التوصيل"
            rules={{ required: "ألسعر مطلوب" }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            انشاء
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
