import { Home, Person } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClassIcon from "@mui/icons-material/Class";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Inventory2Icon from "@mui/icons-material/Inventory2";
const styleIcon = { fontSize: 30, color: "gray" };

export const menuItems = [
  {
    name: "لوحة التحكم",
    icon: <Home sx={styleIcon} />,
    route: "/dashboard",
  },
  {
    name: "المستخدمون",
    icon: <Person sx={styleIcon} />,
    subLinks: [
      {
        name: "مستخدمين القطاعي",
        icon: <PeopleIcon sx={styleIcon} />,
        route: "/dashboard/user?user=sectoral",
      },
      {
        name: "مستخدمين الجملة",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
        route: "/dashboard/user?user=sentence",
      },
    ],
  },
  {
    name: "الفئات الرئيسية",
    icon: <CategoryIcon sx={styleIcon} />,
    subLinks: [
      {
        name: "انشاء فئة رئيسية جديدة",
        icon: <AddCircleOutlineIcon sx={styleIcon} />,
        route: "/dashboard/createMainCategory",
      },
      {
        name: "جميع الفئات الرئيسية",
        icon: <CategoryIcon sx={styleIcon} />,
        route: "/dashboard/mainCategory",
      },
    ],
  },
  {
    name: "الفئات الثانوية",
    icon: <ClassIcon sx={styleIcon} />,
    subLinks: [
      {
        name: "انشاء فئة ثانوية جديدة",
        icon: <AddCircleOutlineIcon sx={styleIcon} />,
        route: "/dashboard/createSubCategory",
      },
      {
        name: "جميع الفئات الثانوية",
        icon: <ClassIcon sx={styleIcon} />,
        route: "/dashboard/subCategory?category=mobile",
      },
    ],
  },
  {
    name: "المدن واسعار التوصيل",
    icon: <LocationCityIcon sx={styleIcon} />,
    subLinks: [
      {
        name: "اضافة مدينة جديدة",
        icon: <AddCircleOutlineIcon sx={styleIcon} />,
        route: "/dashboard/createCity",
      },
      {
        name: "جميع المدن",
        icon: <LocationCityIcon sx={styleIcon} />,
        route: "/dashboard/cities",
      },
    ],
  },
  {
    name: "  المنتجات",
    icon: <Inventory2Icon sx={styleIcon} />,
    subLinks: [
      {
        name: "اضافة منتج جديد",
        icon: <AddCircleOutlineIcon sx={styleIcon} />,
        route: "/dashboard/createProduct",
      },
      {
        name: "جميع المنتجات",
        icon: <Inventory2Icon sx={styleIcon} />,
        route: "/dashboard/products",
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
