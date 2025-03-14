import {
  Box,
  Button,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useEffect, useState } from "react";
import UploadVideo from "../createProduct/UploadVideo";
import { IProduct } from "../../../types/IProduct";
import {
  EditAndAddProduct,
  GetSingleProductById,
} from "../../../services/productApi/productApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import UploadMultiImageForUpdate from "./DisplayMultiImageForUpdate";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";
import useToast from "../../../componant/hooks/useToast";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchSubCategory } from "../../../redux/features/subCategorySlice";

export default function FormEditProduct() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IProduct>();
  const { productId } = useParams();
  const [imagesNormal] = useState<string>("Normal");
  const [imagesThreeD] = useState<string>("_3d");
  const [imagesView] = useState<string>("View");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const subCategory = useAppSelector((state) => state?.subCategory);
  useEffect(() => {
    if (subCategory.status === "idle") {
      dispatch(fetchSubCategory());
    }
  }, [dispatch, subCategory.status]);

  // get product by sub category
  const { data, isLoading } = useQuery({
    queryKey: ["GetSingleProductById", productId],
    queryFn: () => GetSingleProductById(productId),
    enabled: !!productId,
  });

  // edit product
  const onSubmit: SubmitHandler<IProduct> = async (dataInput) => {
    const newData: IProduct = {
      ...data?.data,
      ...dataInput,
      Video: videoFile,
    };
    await EditAndAddProduct(newData, queryClient, productId, showToast);
  };

  useEffect(() => {
    if (data?.data && subCategory?.data?.length > 0) {
      reset({
        NameAr: data?.data?.nameAr || "",
        NameEng: data?.data.nameEng || "",
        NameAbree: data?.data?.nameAbree || "",
        SupCategoryId: data?.data?.supCategoryId,
        NormailPrice: data?.data?.normailPrice || "",
        WholesalePrice: data?.data?.wholesalePrice || "",
        stock: data?.data?.stock || "",
        ManufactureYear: data?.data?.manufactureYear || "",
        discount: data?.data?.discount || "",
        DescriptionAr: data?.data?.descriptionAr || "",
        DescriptionEng: data?.data?.descriptionEng || "",
        DescriptionAbree: data?.data?.descriptionAbree || "",
      });
    }
  }, [data?.data, reset, subCategory?.data?.length]);

  // return loading
  if (isLoading || subCategory?.status === "loading")
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
            rules={{ required: " الاسم باللغة العربية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="NameEng"
            label="الاسم باللغة الانجليزية"
            placeholder="ادخل الاسم باللغة الانجليزية"
            rules={{ required: " الاسم باللغة الانجليزية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="NameAbree"
            label="الاسم باللغة العبرية"
            placeholder="ادخل الاسم باللغة العبرية"
            rules={{ required: " الاسم باللغة العبرية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="NormailPrice"
            label="السعر القطاعي"
            placeholder="ادخل السعر القطاعي"
            type="number"
            step="any"
            rules={{ required: "السعر القطاعي مطلوب" }}
          />
          <CustomInput
            control={control}
            name="WholesalePrice"
            label="السعر الجملة"
            placeholder="ادخل سعر الجملة"
            type="number"
            step="any"
            rules={{ required: " سعر الجملة مطلوب" }}
          />
          <CustomInput
            control={control}
            name="stock"
            label="العدد"
            placeholder="ادخل العدد المتاح"
            type="number"
            rules={{ required: "   العدد المتاح مطلوب" }}
          />
          <CustomInput
            control={control}
            name="ManufactureYear"
            label="سنة الصنع"
            placeholder="ادخل سنة صنع المنتج"
            type="number"
            rules={{ required: " سنة الصنع مطلوبة" }}
          />

          <CustomInput
            control={control}
            name="discount"
            label="الخصم"
            placeholder="ادخل الخصم"
            type="number"
            step="any"
            rules={{ required: "   الخصم مطلوب" }}
          />
          <Controller
            name="SupCategoryId"
            control={control}
            defaultValue={data?.data?.supCategoryId || ""}
            rules={{ required: "الفئة الثانوية مطلوبة" }}
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                sx={{ width: "100%", height: "55px" }}
              >
                {subCategory?.data?.map((sub) => (
                  <MenuItem key={sub.id} value={sub.id}>
                    {sub?.nameAr}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <br />
          <CustomInput
            control={control}
            name="DescriptionAr"
            label="ألوصف باللغة العربية"
            placeholder="ادخل الوصف باللغة العربية"
            multiline
            rows={4}
            rules={{ required: " ألوصف باللغة العربية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="DescriptionEng"
            label="ألوصف باللغة الانجليزية"
            placeholder="ادخل الوصف باللغة الانجليزية"
            multiline
            rows={4}
            rules={{ required: " الوصف باللغة الانجليزية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="DescriptionAbree"
            label="الوصف باللغة العبرية"
            placeholder="ادخل الوصف باللغة العبرية"
            multiline
            rows={4}
            rules={{ required: " الوصف باللغة العبرية مطلوب" }}
          />
        </div>
        <Stack gap="15px" marginTop={"15px"}>
          <UploadMultiImageForUpdate
            images={data?.data?.normalImagesItems}
            typeImage={imagesNormal}
            text="عادية"
            id="normalFiles"
          />
          <UploadMultiImageForUpdate
            images={data?.data?._3DImagesItems}
            typeImage={imagesThreeD}
            text="ثلاثية الابعاد"
            id="threeDFiles"
          />
          <UploadMultiImageForUpdate
            images={data?.data?.viewImagesItems}
            typeImage={imagesView}
            text="طبيعية"
            id="viewFiles"
          />
          <UploadVideo
            videoFile={videoFile}
            setVideoFile={setVideoFile}
            id="videoUpload"
          />
          <Typography variant="h6">الفيديو الحالي : </Typography>
          {data?.data?.videoUrl !== null ? (
            <CardMedia
              component="video"
              src={`${import.meta.env.VITE_BASE_URL}${data?.data?.videoUrl}`}
              controls
              sx={{ borderRadius: "10px", width: "150px", height: "120px" }}
            />
          ) : (
            <Typography variant="body1"> ليس هناك فيديو حاليا</Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "10px" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري التعديل ..." : "تعديل"}
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
