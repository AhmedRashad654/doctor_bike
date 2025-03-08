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

export const FakeRowUsers = [
  {
    id: 1,
    firstName: "احمد",
    email: "ahmed@gmail.com",
    phone: "01092166248",
    AlternativePhone: "01092166248",
    city: "القاهرة",
    address: "مصر، القاهرة",
    isActived: false,
    role: "admin",
  },
  {
    id: 2,
    firstName: "محمد",
    email: "mohamed@gmail.com",
    phone: "01234567890",
    AlternativePhone: "01234567890",
    city: "الإسكندرية",
    address: "مصر، الإسكندرية",
    isActived: true,
    role: "user",
  },
];

export const FakeRowCategory = [
  {
    id: 1,
    name_ar: "فئة رئيسية",
    name_en: "فئة رئيسية",
    name_ab: "فئة رئيسية",
    desc_ar: "فئة رئيسية",
    desc_en: "فئة رئيسية",
    desc_ab: "فئة رئيسية",
    image: "فئة رئيسية",
    isShow: true,
  },
  {
    id: 2,
    name_ar: "فئة رئيسية",
    name_en: "فئة رئيسية",
    name_ab: "فئة رئيسية",
    desc_ar: "فئة رئيسية",
    desc_en: "فئة رئيسية",
    desc_ab: "فئة رئيسية",
    image: "فئة رئيسية",
    isShow: false,
  },
];

export const FakeSubCategory = [
  {
    id: 1,
    name_ar: "فئة ثانوية",
    name_en: "فئة ثانوية",
    name_ab: "فئة ثانوية",
    desc_ar: "فئة ثانوية",
    desc_en: "فئة ثانوية",
    desc_ab: "فئة ثانوية",
    image: "فئة ثانوية",
    isShow: true,
  },
  {
    id: 2,
    name_ar: "فئة ثانوية",
    name_en: "فئة ثانوية",
    name_ab: "فئة ثانوية",
    desc_ar: "فئة ثانوية",
    desc_en: "فئة ثانوية",
    desc_ab: "فئة ثانوية",
    image: "فئة ثانوية",
    isShow: false,
  },
];

export const FakeCities = [
  {
    id: 1,
    name_ar: "القاهرة",
    name_en: "القاهرة",
    name_ab: "القاهرة",
    isShow: true,
    deliver: 50,
  },
  {
    id: 2,
    name_ar: "القاهرة",
    name_en: "القاهرة",
    name_ab: "القاهرة",
    isShow: false,
    deliver: 50,
  },
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

export const FakeOrders = [
  {
    id: 1,
    customerName: "احمد رشاد",
    phoneNum1: "01029166248",
    phoneNum2: "01029166248",
    city: "القاهرة",
    address: "القاهرة",
    isWholesale: "لا",
    priceDelivery: 100,
    totalPriceWithDiscound: 150,
    totalPriceWithOutDiscound: 200,
    status: "pending",
  },
  {
    id: 2,
    customerName: "احمد رشاد",
    phoneNum1: "01029166248",
    phoneNum2: "01029166248",
    city: "القاهرة",
    address: "القاهرة",
    isWholesale: "نعم",
    priceDelivery: 100,
    totalPriceWithDiscound: 150,
    totalPriceWithOutDiscound: 200,
    status: "pending",
  },
];

export const FakeReport = [
  {
    id: 1,
    ReportOwnerName: "احمد رشاد",
    nameProduct: "لابتوب",
    textReport: "بلاغ",
  },
  {
    id: 2,
    ReportOwnerName: "احمد رشاد",
    nameProduct: "لابتوب",
    textReport: "بلاغ",
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
