import { Box, Stack, Typography } from "@mui/material";
import { IDataOrders } from "../../../types/IOrders";
import { formatDate } from "../../../componant/shared/formatDate";
import { formatMoney } from "../../../componant/shared/formatMoney";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { fetchCity } from "../../../redux/features/citySlice";

export default function CustomerInformation({ data }: { data: IDataOrders }) {
  const city = useAppSelector((state) => state?.city);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (city?.status === "idle") {
      dispatch(fetchCity());
    }
  }, [city?.status, dispatch]);

  // function get city name
  const getCityName = (cityId: number) => {
    const findCity = city?.data?.find((e) => e?.id == cityId);
    if (!findCity) return null;
    return findCity?.cityNameAr;
  };
  return (
    <Box sx={{ marginRight: "5px", marginTop: "5px" }}>
      <Typography
        variant="h5"
        sx={{ color: "primary.main", marginBottom: "5px" }}
      >
        بيانات العميل
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        columnGap={"30px"}
        rowGap={"7px"}
      >
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          الاسم :{" "}
          <span className="text-black text-[1rem]">{data?.customerName}</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          رقم الهاتف :{" "}
          <span className="text-black text-[1rem]">{data?.phoneNum1}</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          رقم الهاتف البديل :{" "}
          <span className="text-black text-[1rem]">{data?.phoneNum2}</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          المدينة :{" "}
          <span className="text-black text-[1rem]">
            {getCityName(data?.cityId)}
          </span>
        </Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          العنوان :{" "}
          <span className="text-black text-[1rem]">{data?.address}</span>
        </Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          سعر التوصيل :{" "}
          <span className="text-black text-[1rem]">
            {formatMoney(data?.priceDelivery)}
          </span>
        </Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          تاريخ الطلب :{" "}
          <span className="text-black text-[1rem]">
            {formatDate(data?.dateAdd)}
          </span>
        </Typography>
      </Stack>
    </Box>
  );
}
