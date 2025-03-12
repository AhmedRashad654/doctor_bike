import { Box } from "@mui/material";
import TableMainCategory from "./TableMainCategory";
import CategoryIcon from "@mui/icons-material/Category";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchMainCategory } from "../../../redux/features/mainCategorySlice";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";
import NotFoundData from "../../../componant/shared/NotFoundData";
import notFound from "../../../assets/images/not-found.png";
import InputSearch from "../../../componant/shared/InputSearch";

export default function MainCategory() {
  const [valueSearch, setValueSearch] = useState<string>("");
  const mainCategory = useAppSelector((state) => state?.mainCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mainCategory?.status === "idle") {
      dispatch(fetchMainCategory());
    }
  }, [dispatch, mainCategory?.status]);
  if (mainCategory?.status === "loading")
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (mainCategory?.data?.length === 0)
    return <NotFoundData image={notFound} />;

  return (
    <Box>
      <HeaderDashboard
        Icon={<CategoryIcon sx={{ fontSize: "40px" }} />}
        text={"الفئات الرئيسية"}
      />
      <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />

      <TableMainCategory valueSearch={valueSearch} />
    </Box>
  );
}
