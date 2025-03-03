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
    isBlocked: false,
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
    isBlocked: true,
    role: "user",
  },
];
