import {
  Box,
  Button,
  CardContent,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useEffect, useState } from "react";
import { IProduct } from "../../../types/product";
import UploadMultiImage from "../createProduct/UploadMultiImage";
import UploadVideo from "../createProduct/UploadVideo";

export default function FormEditProduct() {
  const { state } = useLocation();
  const { control, handleSubmit, reset } = useForm<IProduct>();
  const [imagesNormal, setImagesNormal] = useState<File[] | []>([]);
  const [imagesThreeD, setImagesThreeD] = useState<File[] | []>([]);
  const [imagesView, setImagesView] = useState<File[] | []>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (state?.row) {
      reset({
        name_ar: state.row.name_ar || "",
        name_en: state.row.name_en || "",
        name_ab: state.row.name_ab || "",
        normal_price: state.row.normal_price || "",
        whole_sale_price: state.row.whole_sale_price || "",
        stock: state.row.stock || "",
        discount: state.row.discount || "",
        subCategory: state.row.subCategory || "",
        desc_ar: state.row.desc_ar || "",
        desc_en: state.row.desc_en || "",
        desc_ab: state.row.desc_ab || "",
      });
    }
  }, [state?.row, reset]);
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: { md: "90%", xs: "100%" },
        boxShadow: 2,
        borderRadius: "20px",
        marginTop: "15px",
      }}
    >
      <CardContent>
        <img
          src={logo_Bike}
          alt="logo"
          className="w-[120px] h-[120px] mx-auto mb-5"
        />
        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          }}
        >
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
            name="normal_price"
            label="السعر القطاعي"
            placeholder="ادخل السعر القطاعي"
            type="number"
            step="any"
          />
          <CustomInput
            control={control}
            name="whole_sale_price"
            label="السعر الجملة"
            placeholder="ادخل سعر الجملة"
            type="number"
            step="any"
          />
          <CustomInput
            control={control}
            name="stock"
            label="العدد"
            placeholder="ادخل العدد المتاح"
            type="number"
          />
          <CustomInput
            control={control}
            name="discount"
            label="الخصم"
            placeholder="ادخل الخصم"
            type="number"
            step="any"
          />

          <Controller
            name="subCategory"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                sx={{ width: "100%", height: "55px" }}
              >
                <MenuItem value="" disabled>
                  اختر الفئة الثانوية
                </MenuItem>
                {["الكترونيات", "لابتوب", "موبايل"].map((sub) => (
                  <MenuItem key={sub} value={sub}>
                    {sub}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <br />
          <CustomInput
            control={control}
            name="desc_ar"
            label="ألوصف باللغة العربية"
            placeholder="ادخل الوصف باللغة العربية"
            multiline
            rows={4}
          />
          <CustomInput
            control={control}
            name="desc_en"
            label="ألوصف باللغة الانجليزية"
            placeholder="ادخل الوصف باللغة الانجليزية"
            multiline
            rows={4}
          />
          <CustomInput
            control={control}
            name="desc_ab"
            label="الوصف باللغة العبرية"
            placeholder="ادخل الوصف باللغة العبرية"
            multiline
            rows={4}
          />
        </div>
        <Stack gap="15px" marginTop={"15px"}>
          <UploadMultiImage
            images={imagesNormal}
            setImages={setImagesNormal}
            text="عادية"
            id="normalFiles"
          />
          <UploadMultiImage
            images={imagesThreeD}
            setImages={setImagesThreeD}
            text="ثلاثية الابعاد"
            id="threeDFiles"
          />
          <UploadMultiImage
            images={imagesView}
            setImages={setImagesView}
            text="طبيعية"
            id="viewFiles"
          />
          <UploadVideo
            videoFile={videoFile}
            setVideoFile={setVideoFile}
            id="videoUpload"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "10px" }}
          >
            تعديل
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
