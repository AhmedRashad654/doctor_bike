import {
  CardContent,
  Button,
  Avatar,
  Stack,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useImageUpload from "../../../componant/hooks/useImageUpload";
import CustomInput from "../../../componant/shared/CustomInput";
import { useState } from "react";
import useToast from "../../../componant/hooks/useToast";
import { EditAndAddDataSubCategory } from "../../../services/subCategoryApi/subCategoryApi";
import { ISubCategory } from "../../../types/subCategory";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export default function FormCreateSubCategory() {
  const { image, previewUrl, handleImageUpload } = useImageUpload();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { showToast } = useToast();

  // redux
  const mainCategory = useAppSelector((state) => state?.mainCategory?.data);
  const dispatch = useAppDispatch();

  // handle create sub category
  const { control, handleSubmit } = useForm<ISubCategory>();
  const onSubmit: SubmitHandler<ISubCategory> = async (data) => {
    if (!image) return showToast("الصورة مطلوبة", "error");
    if (!selectedCategory) return showToast("الفئة الرئيسية مطلوبة", "error");
    const newData: ISubCategory = {
      ...data,
      imageUrl: image,
      id: 0,
      mainCategoryId: selectedCategory,
    };
    await EditAndAddDataSubCategory(newData, dispatch, showToast);
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
          <label htmlFor="image-upload">
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              hidden
              onChange={handleImageUpload}
            />
            <Avatar
              src={previewUrl || ""}
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
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            displayEmpty
            sx={{ width: "100%", marginBottom: "15px" }}
          >
            <MenuItem value="" disabled>
              اختر الفئة الرئيسية
            </MenuItem>
            {mainCategory?.map((category) => (
              <MenuItem key={category?.id} value={category?.id}>
                {category?.nameAr}
              </MenuItem>
            ))}
          </Select>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            انشاء
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
