import { CardContent, Button, Avatar, Stack, Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMainCategory } from "../../../types/category";
import useImageUpload from "../../../componant/hooks/useImageUpload";
import CustomInput from "../../../componant/shared/CustomInput";
import { EditAndAddDataMainCategory } from "../../../services/category/category";
import { useAppDispatch } from "../../../redux/hooks";
import useToast from "../../../componant/hooks/useToast";

export default function FormCreateMainCategory() {
  const { image, previewUrl, handleImageUpload } = useImageUpload();
  const { control, handleSubmit } = useForm<IMainCategory>();
  const { showToast } = useToast();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IMainCategory> = async (data) => {
    if (!image) return showToast("الصورة مطلوبة","error");
    const newData: IMainCategory = {
      ...data,
      imageUrl: image,
      id: 0,
    };
    await EditAndAddDataMainCategory(newData, dispatch, showToast);
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
            multiline
            rows={4}
            rules={{ required: " الاسم باللغة العربية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="descriptionEng"
            label="الوصف باللغة الانجليزية"
            placeholder="ادخل الوصف باللغة الانجليزية"
            rules={{ required: " الاسم باللغة الانجليزية مطلوب" }}
            multiline
            rows={4}
          />

          <CustomInput
            control={control}
            name="descriptionAbree"
            label="الوصف باللغة العبرية"
            placeholder="ادخل الوصف باللغة العبرية"
            rules={{ required: " الاسم باللغة العبرية مطلوب" }}
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
