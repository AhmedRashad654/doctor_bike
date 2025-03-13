import HeaderDashboard from "../../../componant/ui/HeaderDashboard/HeaderDashboard";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import CustomerInformation from "./CustomerInformation";
import { Box } from "@mui/material";
import DetailsItems from "./DetailsItems";
import { useParams } from "react-router-dom";
import { GetSingleOrderById } from "../../../services/ordersApi/ordersApi";
import { useQuery } from "@tanstack/react-query";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";

export default function DetailsOrder() {
  const { orderId } = useParams();
  // get orders
  const { data, isLoading } = useQuery({
    queryKey: ["GetSingleOrderById", orderId],
    queryFn: () => GetSingleOrderById(orderId),
    enabled: !!orderId,
  });

  // loading
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  return (
    <Box>
      <HeaderDashboard
        Icon={<RequestPageIcon sx={{ fontSize: "40px" }} />}
        text={"تفاصيل الاوردر"}
      />
      <CustomerInformation data={data?.data} />
      <DetailsItems data={data?.data} />
    </Box>
  );
}
