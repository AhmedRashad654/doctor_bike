import { CardContent, Button, Avatar, Stack, Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useImageUpload from "../../../componant/hooks/useImageUpload";
import CustomInput from "../../../componant/shared/CustomInput";
import { IAdvertisement } from "../../../types/IAdvertisement";
import { EditAndAddAdvertisement } from "../../../services/advertisementApi/advertisementApi";
import useToast from "../../../componant/hooks/useToast";

export default function FormCreateAdvertisement() {
  const { previewUrl, image, handleImageUpload } = useImageUpload();
  const { showToast } = useToast();
  const { control, handleSubmit } = useForm<IAdvertisement>();
  const onSubmit: SubmitHandler<IAdvertisement> = async (data) => {
    if (!image) return showToast("الصورة مطلوبة", "error");
    const newData: IAdvertisement = {
      ...data,
      img: image,
      id: 0,
      isShow: true,
    };
    await EditAndAddAdvertisement(newData, null, undefined, showToast);
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
            name="title"
            label="العنوان"
            placeholder="ادخل  العنوان"
            rules={{ required: " العنوان مطلوب" }}
          />
          <CustomInput
            control={control}
            name="urlAds"
            label="رابط الاعلان"
            placeholder="ادخل  رابط الاعلان"
            rules={{ required: "   رابط الاعلان مطلوب" }}
          />
          <CustomInput
            control={control}
            name="description"
            label=" الوصف"
            placeholder="ادخل الوصف"
            multiline
            rows={4}
            rules={{ required: " الوصف مطلوب" }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            انشاء
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
