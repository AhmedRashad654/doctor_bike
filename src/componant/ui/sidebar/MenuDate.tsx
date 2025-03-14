import { Home, Person } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClassIcon from "@mui/icons-material/Class";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PendingIcon from "@mui/icons-material/Pending";
import CancelIcon from "@mui/icons-material/Cancel";
import ReportIcon from "@mui/icons-material/Report";
import CommentIcon from "@mui/icons-material/Comment";
import ListIcon from "@mui/icons-material/List";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FiberNewIcon from "@mui/icons-material/FiberNew";
const styleIcon = { fontSize: 30, color: "gray" };

export const getMenuItems = (firstCategory: string) => [
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
        route: "/dashboard/user?user=Normail&page=1",
      },
      {
        name: "مستخدمين الجملة",
        icon: <PeopleOutlineIcon sx={styleIcon} />,
        route: "/dashboard/user?user=Wholesale&page=1",
      },
      {
        name: "كل المستخدمين",
        icon: <Diversity3Icon sx={styleIcon} />,
        route: "/dashboard/user?user=all&page=1",
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
        route: `/dashboard/subCategory?category=${firstCategory}`,
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
        route: `/dashboard/products?page=1`,
      },
    ],
  },
  {
    name: "طلبات الشراء",
    icon: <RequestPageIcon sx={styleIcon} />,
    subLinks: [
      {
        name: "طلبات جديدة",
        icon: <FiberNewIcon sx={styleIcon} />,
        route: "/dashboard/orders?status=New&page=1",
      },
      {
        name: "طلبات مكتملة",
        icon: <FactCheckIcon sx={styleIcon} />,
        route: "/dashboard/orders?status=Done&page=1",
      },
      {
        name: "طلبات جارية",
        icon: <PendingIcon sx={styleIcon} />,
        route: "/dashboard/orders?status=Pending&page=1",
      },
      {
        name: "طلبات ملغية",
        icon: <CancelIcon sx={styleIcon} />,
        route: "/dashboard/orders?status=Canceled&page=1",
      },
    ],
  },
  {
    name: "البلاغات",
    icon: <ReportIcon sx={styleIcon} />,
    route: "/dashboard/reports?page=1",
  },
  {
    name: "التعليقات",
    icon: <CommentIcon sx={styleIcon} />,
    route: "/dashboard/comments?page=1",
  },
  {
    name: "الاعلانات",
    icon: <FeaturedVideoIcon sx={styleIcon} />,
    subLinks: [
      {
        name: "اضافة اعلان",
        icon: <AddCircleOutlineIcon sx={styleIcon} />,
        route: "/dashboard/createAdvertisement",
      },
      {
        name: "جميع الاعلانات",
        icon: <FeaturedVideoIcon sx={styleIcon} />,
        route: "/dashboard/advertisement?page=1",
      },
    ],
  },
  {
    name: "خيارات لوحة التحكم",
    icon: <ListIcon sx={styleIcon} />,
  },
];
