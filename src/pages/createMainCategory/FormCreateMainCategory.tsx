import { CardContent, Button, Avatar, Stack, Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMainCategory } from "../../types/category";
import CustomInput from "../../componant/shared/CustomInput";
import useImageUpload from "../../componant/hooks/useImageUpload";

function FormCreateMainCategory() {
  const { image, handleImageUpload } = useImageUpload();
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

export default FormCreateMainCategory;
