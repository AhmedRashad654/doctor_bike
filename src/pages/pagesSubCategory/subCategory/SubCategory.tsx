import { Box } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import TableSubCategory from "./TableSubCategory";
import NavbarCategory from "./NavbarCategory";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { fetchSubCategory } from "../../../redux/features/subCategorySlice";
import NotFoundData from "../../../componant/shared/NotFoundData";
import notFound from "../../../assets/images/not-found.png";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";
export default function SubCategory() {
  // const [valueSearch, setValueSearch] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const subCategory = useAppSelector((state) => state?.subCategory);

  // fetch sub category
  useEffect(() => {
    if (subCategory?.status === "idle") {
      dispatch(fetchSubCategory());
    }
  }, [dispatch, subCategory?.status]);
  if (subCategory?.status === "loading")
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (subCategory?.data?.length === 0) return <NotFoundData image={notFound} />;
  return (
    <Box>
      <HeaderDashboard
        Icon={<ClassIcon sx={{ fontSize: "40px" }} />}
        text={"الفئات الثانوية"}
      />
      <NavbarCategory />
      {/* <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} /> */}
      <TableSubCategory />
    </Box>
  );
}
