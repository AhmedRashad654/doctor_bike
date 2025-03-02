import { Home, Person } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
const styleIcon = { fontSize: 30, color: "gray" };

export const menuItems = [
  {
    name: "لوحة التحكم",
    icon: <Home sx={styleIcon} />,
  },
  {
    name: "المستخدمون",
    icon: <Person sx={styleIcon} />,
    subLinks: [
      { name: "مستخدمين القطاعي", icon: <PeopleIcon sx={styleIcon} /> },
      { name: "مستخدمين الجملة", icon: <PeopleOutlineIcon sx={styleIcon} /> },
    ],
  },
  {
    name: "الفئات الرئيسية",
    icon: <Person sx={styleIcon} />,
    subLinks: [
      { name: "انشاء فئة رئيسية جديدة", icon: <PeopleIcon sx={styleIcon} /> },
      {
        name: "جميع الفئات الرئيسية",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
      },
    ],
  },
  {
    name: "الفئات الثانوية",
    icon: <Person sx={styleIcon} />,
    subLinks: [
      { name: "انشاء فئة ثانوية جديدة", icon: <PeopleIcon sx={styleIcon} /> },
      {
        name: "جميع الفئات الثانوية",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
      },
    ],
  },
  {
    name: "المدن واسعار التوصيل",
    icon: <Person sx={styleIcon} />,
    subLinks: [
      { name: "اضافة مدينة جديدة", icon: <PeopleIcon sx={styleIcon} /> },
      {
        name: "جميع المدن",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
      },
    ],
  },
  {
    name: "  المنتجات",
    icon: <Person sx={styleIcon} />,
    subLinks: [
      { name: "اضافة منتج جديد", icon: <PeopleIcon sx={styleIcon} /> },
      {
        name: "جميع المنتجات",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
      },
    ],
  },
  {
    name: "طلبات الشراء",
    icon: <Person sx={styleIcon} />,
    subLinks: [
      { name: "طلبات مكتملة", icon: <PeopleIcon sx={styleIcon} /> },
      {
        name: "طلبات جارية",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
      },
      {
        name: "طلبات ملغية",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
      },
    ],
  },
  {
    name: "البلاغات",
    icon: <Person sx={styleIcon} />,
  },
  {
    name: "التعليقات",
    icon: <Person sx={styleIcon} />,
  },
  {
    name: "الاعلانات",
    icon: <Person sx={styleIcon} />,
    subLinks: [
      { name: "اضافة اعلان", icon: <PeopleIcon sx={styleIcon} /> },
      {
        name: "جميع الاعلانات",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
      },
    ],
  },
  {
    name: "خيارات لوحة التحكم",
    icon: <Person sx={styleIcon} />,
  },
];
