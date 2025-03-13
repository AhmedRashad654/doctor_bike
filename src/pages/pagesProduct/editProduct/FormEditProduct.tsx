import { Box, Button, CardContent, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useEffect, useState } from "react";
import UploadVideo from "../createProduct/UploadVideo";
import { IProduct } from "../../../types/IProduct";
import { GetSingleProductById } from "../../../services/productApi/productApi";
import { useQuery } from "@tanstack/react-query";
import UploadMultiImageForUpdate from "./DisplayMultiImageForUpdate";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";

export default function FormEditProduct() {
  const { control, handleSubmit, reset } = useForm<IProduct>();
  const { productId } = useParams();
  const [imagesNormal, setImagesNormal] = useState<File | null>(null);
  const [imagesThreeD, setImagesThreeD] = useState<File | null>(null);
  const [imagesView, setImagesView] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  // get product by sub category
  const { data, isLoading } = useQuery({
    queryKey: ["GetSingleProductById", productId],
    queryFn: () => GetSingleProductById(productId),
    enabled: !!productId,
  });

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (data?.data) {
      reset({
        NameAr: data?.data?.nameAr || "",
        NameEng: data?.data.nameEng || "",
        NameAbree: data?.data?.nameAbree || "",
        NormailPrice: data?.data?.normailPrice || "",
        WholesalePrice: data?.data?.wholesalePrice || "",
        stock: data?.data?.stock || "",
        discount: data?.data?.discount || "",
        DescriptionAr: data?.data?.descriptionAr || "",
        DescriptionEng: data?.data?.descriptionEng || "",
        DescriptionAbree: data?.data?.descriptionAbree || "",
      });
    }
  }, [data?.data, reset]);
  console.log(data);
  // return loading
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
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
            name="NameAr"
            label="الاسم باللغة العربية"
            placeholder="ادخل الاسم بالعربية"
          />
          <CustomInput
            control={control}
            name="NameEng"
            label="الاسم باللغة الانجليزية"
            placeholder="ادخل الاسم باللغة الانجليزية"
          />
          <CustomInput
            control={control}
            name="NameAbree"
            label="الاسم باللغة العبرية"
            placeholder="ادخل الاسم باللغة العبرية"
          />
          <CustomInput
            control={control}
            name="NormailPrice"
            label="السعر القطاعي"
            placeholder="ادخل السعر القطاعي"
            type="number"
            step="any"
          />
          <CustomInput
            control={control}
            name="WholesalePrice"
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
          <br />
          <CustomInput
            control={control}
            name="DescriptionAr"
            label="ألوصف باللغة العربية"
            placeholder="ادخل الوصف باللغة العربية"
            multiline
            rows={4}
          />
          <CustomInput
            control={control}
            name="DescriptionEng"
            label="ألوصف باللغة الانجليزية"
            placeholder="ادخل الوصف باللغة الانجليزية"
            multiline
            rows={4}
          />
          <CustomInput
            control={control}
            name="DescriptionAbree"
            label="الوصف باللغة العبرية"
            placeholder="ادخل الوصف باللغة العبرية"
            multiline
            rows={4}
          />
        </div>
        <Stack gap="15px" marginTop={"15px"}>
          <UploadMultiImageForUpdate
            images={data?.data?.normalImagesItems}
            setImages={setImagesNormal}
            text="عادية"
            id="normalFiles"
          />
          <UploadMultiImageForUpdate
            images={data?.data?._3DImagesItems}
            setImages={setImagesThreeD}
            text="ثلاثية الابعاد"
            id="threeDFiles"
          />
          <UploadMultiImageForUpdate
            images={data?.data?.viewImagesItems}
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
