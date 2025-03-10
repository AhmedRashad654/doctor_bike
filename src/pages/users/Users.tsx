import { Box } from "@mui/material";
import HeaderDashboard from "../../componant/ui/HeaderDashboard/HeaderDashboard";
import { People } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import TableUsers from "./TableUsers";
import { getUserByType } from "../../services/users/user";
import { useQuery } from "@tanstack/react-query";
import LoadingSkeleton from "../../componant/shared/LoadingSkeleton";
import NotFoundData from "../../componant/shared/NotFoundData";
import notFound from "../../assets/images/not-found.png";

export default function Users() {
  const [searchParams] = useSearchParams();
  // const [valueSearch, setValueSearch] = useState<string | null>(null);
  const user = searchParams.get("user");
  const page = Number(searchParams.get("page"));
  // get users
  const { data, isLoading } = useQuery({
    queryKey: ["getUserByType", user, page],
    queryFn: () => getUserByType(user, page),
    enabled: !!user || !!page,
  });
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (data?.data?.rows?.length === 0) return <NotFoundData image={notFound} />;
  if (!data) return null;
  console.log(data);
  return (
    <Box>
      <HeaderDashboard
        Icon={<People sx={{ fontSize: "40px" }} />}
        text={
          user === "Normail"
            ? "المستخدمين القطاعي"
            : user === "Wholesale"
            ? "مستخدمين الجملة"
            : user === "all"
            ? "كل المستخدمين"
            : ""
        }
      />
      {/* <InputSearch valueSearch={valueSearch} setValueSearch={setValueSearch} /> */}
      <TableUsers user={data?.data} />
    </Box>
  );
}