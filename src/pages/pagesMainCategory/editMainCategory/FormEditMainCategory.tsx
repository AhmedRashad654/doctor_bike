import { Avatar, Box, Button, CardContent, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { IMainCategory } from "../../../types/category";
import useImageUpload from "../../../componant/hooks/useImageUpload";
import CustomInput from "../../../componant/shared/CustomInput";
import { useEffect } from "react";

function FormEditMainCategory() {
  const { state } = useLocation();
  const { image, handleImageUpload } = useImageUpload();
  const { control, handleSubmit, reset } = useForm<IMainCategory>();
  const onSubmit: SubmitHandler<IMainCategory> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (state?.row) {
      reset({
        name_ar: state.row.name_ar || "",
        name_en: state.row.name_en || "",
        name_ab: state.row.name_ab || "",
        description_ar: state.row.desc_ar || "",
        description_en: state.row.desc_en || "",
        description_ab: state.row.desc_ab || "",
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
          <label htmlFor="image-upload">
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              hidden
              onChange={handleImageUpload}
            />
            <Avatar
              src={image || ""}
              sx={{
                width: 100,
                height: 100,
                cursor: "pointer",
              }}
            />
          </label>

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
            name="description_ar"
            label=" الوصف باللغة العربية"
            placeholder=" ادخل الوصف باللغة العربية"
            multiline
            rows={4}
          />
          <CustomInput
            control={control}
            name="description_en"
            label="الوصف باللغة الانجليزية"
            placeholder="ادخل الوصف باللغة الانجليزية"
            multiline
            rows={4}
          />

          <CustomInput
            control={control}
            name="description_ab"
            label="الوصف باللغة العبرية"
            placeholder="ادخل الوصف باللغة العبرية"
            multiline
            rows={4}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            انشاء
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}

export default FormEditMainCategory;
