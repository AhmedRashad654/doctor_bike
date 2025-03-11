import { Avatar, Box, Button, CardContent, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import useImageUpload from "../../../componant/hooks/useImageUpload";
import CustomInput from "../../../componant/shared/CustomInput";
import { useEffect } from "react";
import { ISubCategory } from "../../../types/subCategory";
import { EditAndAddDataSubCategory } from "../../../services/subCategoryApi/subCategoryApi";
import useToast from "../../../componant/hooks/useToast";
import { useAppDispatch } from "../../../redux/hooks";

function FormEditSubCategory() {
  const { state } = useLocation();
  const { image, previewUrl, handleImageUpload } = useImageUpload();
  const { control, handleSubmit, reset } = useForm<ISubCategory>();

  // show text such alert
  const { showToast } = useToast();

  // handle Edit sub category
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<ISubCategory> = async (data) => {
    const newData: ISubCategory = {
      ...state.row,
      ...data,
      imageUrl: image || state?.imageUrl,
    };
    await EditAndAddDataSubCategory(newData, dispatch, showToast);
  };

  // initial data
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
            rules={{ required: " الاسم باللغة العربية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="nameEng"
            label="الاسم باللغة الانجليزية"
            placeholder="ادخل الاسم باللغة الانجليزية"
            rules={{ required: " الاسم باللغة الانجليزية مطلوب" }}
          />

          <CustomInput
            control={control}
            name="nameAbree"
            label="الاسم باللغة العبرية"
            placeholder="ادخل الاسم باللغة العبرية"
            rules={{ required: " الاسم باللغة العبرية مطلوب" }}
          />

          <CustomInput
            control={control}
            name="descriptionAr"
            label=" الوصف باللغة العربية"
            placeholder=" ادخل الوصف باللغة العربية"
            rules={{ required: " الوصف باللغة العربية مطلوب" }}
            multiline
            rows={4}
          />
          <CustomInput
            control={control}
            name="descriptionEng"
            label="الوصف باللغة الانجليزية"
            placeholder="ادخل الوصف باللغة الانجليزية"
            rules={{ required: " الوصف باللغة الانجليزية مطلوب" }}
            multiline
            rows={4}
          />

          <CustomInput
            control={control}
            name="descriptionAbree"
            label="الوصف باللغة العبرية"
            placeholder="ادخل الوصف باللغة العبرية"
            rules={{ required: " الوصف باللغة العبرية مطلوب" }}
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

export default FormEditSubCategory;
