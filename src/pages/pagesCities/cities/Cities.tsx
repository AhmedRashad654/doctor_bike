import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import InputSearch from "../../../componant/shared/InputSearch";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TableCities from "./TableCities";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";
import NotFoundData from "../../../componant/shared/NotFoundData";
import notFound from "../../../assets/images/not-found.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchCity } from "../../../redux/features/citySlice";

export default function Cities() {
  const [valueSearch, setValueSearch] = useState<string>("");
  // get city
  const city = useAppSelector((state) => state?.city);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (city?.status === "idle") {
      dispatch(fetchCity());
    }
  }, [city?.status, dispatch]);

  if (city?.status === "loading")
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (city?.data?.length === 0) return <NotFoundData image={notFound} />;
  return (
    <Box>
      <HeaderDashboard
        Icon={<LocationCityIcon sx={{ fontSize: "40px" }} />}
        text={"المدن"}
      />
      <InputSearch
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
        text={"بحث بالاسم بالعربية"}
      />
      <TableCities valueSearch={valueSearch} />
    </Box>
  );
}
