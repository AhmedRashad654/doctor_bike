import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { columnsReports } from "../../constants/columnTables";
import ButtonPagination from "../../componant/ui/pagination/ButtonPagination";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import notFound from "../../assets/images/not-found.png";
import NotFoundData from "../../componant/shared/NotFoundData";
import LoadingSkeleton from "../../componant/shared/LoadingSkeleton";
import { getReports } from "../../services/reportsApi/reportsApi";
import { IReports } from "../../types/IReports";

export default function TableReports() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

  // get reports
  const { data, isLoading } = useQuery({
    queryKey: ["getReports", page],
    queryFn: () => getReports(page),
  });
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (data?.data?.rows?.length === 0) return <NotFoundData image={notFound} />;
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ height: "75vh", marginTop: "20px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {columnsReports.map((col) => (
                <TableCell
                  key={col.field}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "right",
                    minWidth: "150px",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.rows.map((row: IReports) => (
              <TableRow key={row.id}>
                {columnsReports.map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.field === "dateAdd"
                      ? row?.dateAdd?.slice(0, 10)
                      : row[col.field as keyof typeof row]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonPagination
        totalPages={data?.data?.paginationInfo?.totalPagesCount}
      />
    </>
  );
}
