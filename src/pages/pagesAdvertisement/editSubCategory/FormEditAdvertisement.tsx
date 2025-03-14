import { Avatar, Box, Button, CardContent, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import useImageUpload from "../../../componant/hooks/useImageUpload";
import CustomInput from "../../../componant/shared/CustomInput";
import { useEffect } from "react";
import { IAdvertisement } from "../../../types/IAdvertisement";
import { EditAndAddAdvertisement } from "../../../services/advertisementApi/advertisementApi";
import useToast from "../../../componant/hooks/useToast";

export default function FormEditAdvertisement() {
  const { state } = useLocation();

  const { image, previewUrl, handleImageUpload } = useImageUpload();
  const { control, handleSubmit, reset } = useForm<IAdvertisement>();
  // hook for show text such alert
  const { showToast } = useToast();

  const onSubmit: SubmitHandler<IAdvertisement> = async (data) => {
    const newData: IAdvertisement = {
      ...state.row,
      ...data,
      img: image || state?.imageUrl,
    };
    await EditAndAddAdvertisement(newData, null, undefined, showToast);
  };
  useEffect(() => {
    if (state?.row) {
      reset({
        title: state.row.title || "",
        description: state.row.description || "",
        urlAds: state.row.urlAds || "",
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
                (state?.row?.imgUrl !== null &&
                  `${import.meta.env.VITE_BASE_URL}${state?.row?.imgUrl}`) ||
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
            name="title"
            label="العنوان"
            placeholder="ادخل  العنوان"
            rules={{ required: " العنوان مطلوب" }}
          />
          <CustomInput
            control={control}
            name="urlAds"
            label="رابط الموقع"
            placeholder="ادخل  رابط الموقع"
            rules={{ required: "   رابط الاعلان مطلوب" }}
          />
          <CustomInput
            control={control}
            name="description"
            label=" الوصف  "
            placeholder=" ادخل الوصف"
            multiline
            rows={4}
            rules={{ required: " الوصف مطلوب" }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            تعديل
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
