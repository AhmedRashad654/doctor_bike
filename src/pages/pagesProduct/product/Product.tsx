import { Box } from "@mui/material";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TableProduct from "./TableProduct";
import SearchBySubCategory from "./SearchBySubCategory";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";

export default function Product() {
  const [valueSearch, setValueSearch] = useState<number>(0);

  // get sub category
  const subCategory = useAppSelector((state) => state?.subCategory);

  // return loading
  if (subCategory?.status === "loading")
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  return (
    <Box>
      <HeaderDashboard
        Icon={<LocationCityIcon sx={{ fontSize: "40px" }} />}
        text={"المنتجات"}
      />
      <SearchBySubCategory
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
        options={subCategory?.data}
      />

      <TableProduct valueSearch={valueSearch} />
    </Box>
  );
}
