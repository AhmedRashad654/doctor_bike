import {
  CardContent,
  Button,
  Box,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../../../componant/shared/CustomInput";
import logo_Bike from "../../../assets/images/logo_Bike.png";
import { useEffect, useState } from "react";
import UploadMultiImage from "./UploadMultiImage";
import UploadVideo from "./UploadVideo";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchSubCategory } from "../../../redux/features/subCategorySlice";
import { IProduct } from "../../../types/IProduct";
import { EditAndAddProduct } from "../../../services/productApi/productApi";
import useToast from "../../../componant/hooks/useToast";

export default function FormCreateProduct() {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [imagesNormal, setImagesNormal] = useState<File[] | []>([]);
  const [imagesThreeD, setImagesThreeD] = useState<File[] | []>([]);
  const [imagesView, setImagesView] = useState<File[] | []>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IProduct>();
  const { showToast } = useToast();
  // create new product
  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    if (!selectedSubCategory) return showToast("الفئة الثانوية مطلوب", "error");
    const newData: IProduct = {
      ...data,
      SupCategoryId: selectedSubCategory,
      id: 0,
      Video: videoFile,
      NormalImg: imagesNormal,
      threeDImg: imagesThreeD,
      ViewImg: imagesView,
    };
    await EditAndAddProduct(newData, null, undefined, showToast);
  };

  const dispatch = useAppDispatch();
  const subCategory = useAppSelector((state) => state?.subCategory);
  useEffect(() => {
    if (subCategory.status === "idle") {
      dispatch(fetchSubCategory());
    }
  }, [dispatch, subCategory.status]);
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
            rules={{ required: " السعر القطاعي مطلوب" }}
          />
          <CustomInput
            control={control}
            name="WholesalePrice"
            label="سعر الجملة"
            placeholder="ادخل سعر الجملة"
            type="number"
            step="any"
            rules={{ required: " السعر الجملة مطلوب" }}
          />
          <CustomInput
            control={control}
            name="Stock"
            label="العدد"
            placeholder="ادخل عدد المنتج"
            type="number"
            rules={{ required: " العدد مطلوب" }}
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
            name="Discount"
            label="الخصم"
            placeholder="ادخل الخصم"
            type="number"
            step="any"
            rules={{ required: " الخصم  مطلوب" }}
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
            {subCategory?.data?.map((sub) => (
              <MenuItem key={sub.id} value={sub.id}>
                {sub?.nameAr}
              </MenuItem>
            ))}
          </Select>
          <br />
          <CustomInput
            control={control}
            name="DescriptionAr"
            label=" الوصف باللغة العربية"
            placeholder=" ادخل الوصف باللغة العربية"
            multiline
            rows={4}
            rules={{ required: "  الوصف باللغة العربية مطلوب" }}
          />
          <CustomInput
            control={control}
            name="DescriptionEng"
            label="الوصف باللغة الانجليزية"
            placeholder="ادخل الوصف باللغة الانجليزية"
            multiline
            rows={4}
            rules={{ required: "  الوصف باللغة الانجليزية مطلوب" }}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري الاضافة ..." : "انشاء"}
          </Button>
        </Stack>
      </CardContent>
    </Box>
  );
}
