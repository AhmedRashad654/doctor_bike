import { People } from "@mui/icons-material";
const style = { fontSize: "70px" };

export const cardsCount = [
  { name: "مستخدم قطاعي", count: 50, Icon: <People sx={style} /> },
  { name: "مستخدم جملة", count: 50, Icon: <People sx={style} /> },
  { name: "فئة رئيسية", count: 50, Icon: <People sx={style} /> },
  { name: "فئة ثانوية", count: 50, Icon: <People sx={style} /> },
  { name: "مدينة", count: 50, Icon: <People sx={style} /> },
  { name: "منتج", count: 50, Icon: <People sx={style} /> },
  { name: "طلب شراء", count: 50, Icon: <People sx={style} /> },
  { name: "بلاغ", count: 50, Icon: <People sx={style} /> },
  { name: "تعليق", count: 50, Icon: <People sx={style} /> },
  { name: "اعلان", count: 50, Icon: <People sx={style} /> },
];

export const FakeProduct = [
  {
    id: 1,
    name_ar: "لابتوب",
    name_en: "لابتوب",
    name_ab: "لابتوب",
    normal_price: 50,
    whole_sale_price: 70,
    stock: 5,
    discount: 30,
    subCategory: "لابتوب",
    desc_ar: "لابتوب",
    desc_en: "لابتوب",
    desc_ab: "لابتوب",
    isShow: true,
  },
  {
    id: 2,
    name_ar: "لابتوب",
    name_en: "لابتوب",
    name_ab: "لابتوب",
    normal_price: 50,
    whole_sale_price: 70,
    stock: 5,
    discount: 30,
    subCategory: "لابتوب",
    desc_ar: "لابتوب",
    desc_en: "لابتوب",
    desc_ab: "لابتوب",
    isShow: false,
  },
];




export const FakeComment = [
  {
    id: 1,
    commentOwnerName: "احمد رشاد",
    nameProduct: "لابتوب",
    textComment: "كومنت",
  },
  {
    id: 2,
    commentOwnerName: "احمد رشاد",
    nameProduct: "لابتوب",
    textComment: "كومنت",
  },
];

export const FakeAdvertisement = [
  {
    id: 1,
    name_ar: "اعلان",
    name_en: "اعلان",
    name_ab: "اعلان",
    desc_ar: "اعلان",
    desc_en: "اعلان",
    desc_ab: "اعلان",
    image: "اعلان",
    isShow: true,
  },
  {
    id: 2,
    name_ar: "اعلان",
    name_en: "اعلان",
    name_ab: "اعلان",
    desc_ar: "اعلان",
    desc_en: "اعلان",
    desc_ab: "اعلان",
    image: "اعلان",
    isShow: false,
  },
];
