import {
  CardContent,
  Button,
  Box,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { IMainCategory } from "../../../types/category";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useState } from "react";
import UploadMultiImage from "./UploadMultiImage";
import UploadVideo from "./UploadVideo";

export default function FormCreateProduct() {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [imagesNormal, setImagesNormal] = useState<File[] | []>([]);
  const [imagesThreeD, setImagesThreeD] = useState<File[] | []>([]);
  const [imagesView, setImagesView] = useState<File[] | []>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const { control, handleSubmit } = useForm<IMainCategory>();
  const onSubmit: SubmitHandler<IMainCategory> = (data) => {
    console.log(data);
  };
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
            label="سعر الجملة"
            placeholder="ادخل سعر الجملة"
            type="number"
            step="any"
          />
          <CustomInput
            control={control}
            name="stock"
            label="العدد"
            placeholder="ادخل عدد المنتج"
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
          <Select
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
            displayEmpty
            sx={{ width: "100%", height: "55px" }}
          >
            <MenuItem value="" disabled>
              اختر الفئة الثانوية
            </MenuItem>
            {["الكترونيات", "لابتوب", "موبايل"].map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
          <br />
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
            انشاء
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
