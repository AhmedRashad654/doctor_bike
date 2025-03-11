import { Avatar, Box, Button, CardContent, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { IMainCategory } from "../../../types/category";
import useImageUpload from "../../../componant/hooks/useImageUpload";
import CustomInput from "../../../componant/shared/CustomInput";
import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import useToast from "../../../componant/hooks/useToast";
import { EditDataMainCategory } from "../../../services/category/category";

function FormEditMainCategory() {
  const { state } = useLocation();
  const { image, previewUrl, handleImageUpload } = useImageUpload();
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const { control, handleSubmit, reset } = useForm<IMainCategory>();
  const onSubmit: SubmitHandler<IMainCategory> = async (data) => {
    const newData: IMainCategory = {
      ...state.row,
      ...data,
      imageUrl: image || state?.imageUrl,
    };
    await EditDataMainCategory(newData, dispatch, showToast);
  };
  // initial state
  useEffect(() => {
    if (state?.row) {
      reset({
        nameAr: state.row.nameAr || "",
        nameEng: state.row.nameEng || "",
        nameAbree: state.row.nameAbree || "",
        descriptionAr: state.row.descriptionAr || "",
        descriptionEng: state.row.descriptionEng || "",
        descriptionAbree: state.row.descriptionAbree || "",
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
              src={
                previewUrl ||
                (state?.row?.imageUrl !== null &&
                  `${import.meta.env.VITE_BASE_URL}${state?.row?.imageUrl}`) ||
                undefined
              }
              sx={{
                width: 100,
                height: 100,
                cursor: "pointer",
              }}
            />
          </label>

          <CustomInput
            control={control}
            name="nameAr"
            label="الاسم باللغة العربية"
            placeholder="ادخل الاسم بالعربية"
          />
          <CustomInput
            control={control}
            name="nameEng"
            label="الاسم باللغة الانجليزية"
            placeholder="ادخل الاسم باللغة الانجليزية"
          />

          <CustomInput
            control={control}
            name="nameAbree"
            label="الاسم باللغة العبرية"
            placeholder="ادخل الاسم باللغة العبرية"
          />

          <CustomInput
            control={control}
            name="descriptionAr"
            label=" الوصف باللغة العربية"
            placeholder=" ادخل الوصف باللغة العربية"
            multiline
            rows={4}
          />
          <CustomInput
            control={control}
            name="descriptionEng"
            label="الوصف باللغة الانجليزية"
            placeholder="ادخل الوصف باللغة الانجليزية"
            multiline
            rows={4}
          />

          <CustomInput
            control={control}
            name="descriptionAbree"
            label="الوصف باللغة العبرية"
            placeholder="ادخل الوصف باللغة العبرية"
            multiline
            rows={4}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            تعديل
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}

export default FormEditMainCategory;
