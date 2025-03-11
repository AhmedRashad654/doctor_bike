import { Box } from "@mui/material";
import { useState } from "react";
import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import InputSearch from "../../../componant/shared/InputSearch";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TableCities from "./TableCities";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";
import NotFoundData from "../../../componant/shared/NotFoundData";
import { useQuery } from "@tanstack/react-query";
import { GetAllCity } from "../../../services/city/city";
import notFound from "../../../assets/images/not-found.png";

export default function Cities() {
  const [valueSearch, setValueSearch] = useState<string>("");
  // get city
  const { data, isLoading } = useQuery({
    queryKey: ["GetAllCity"],
    queryFn: () => GetAllCity(),
  });
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (data?.data?.rows?.length === 0) return <NotFoundData image={notFound} />;
  if (!data) return null;
  return (
    <Box>
      <HeaderDashboard
        Icon={<LocationCityIcon sx={{ fontSize: "40px" }} />}
        text={"المدن"}
      />
      <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <TableCities city={data?.data?.rows} valueSearch={valueSearch} />
    </Box>
  );
}
