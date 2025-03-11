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
