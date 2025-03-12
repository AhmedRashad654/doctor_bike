import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { columnsOrders } from "../../constants/columnTables";
import ButtonPagination from "../../componant/ui/pagination/ButtonPagination";
import { useMemo, useState } from "react";
import ModalEditStatus from "./ModalEditStatus";
import LoadingSkeleton from "../../componant/shared/LoadingSkeleton";
import { IDataOrders, IOrders } from "../../types/IOrders";
import NotFoundData from "../../componant/shared/NotFoundData";
import notFound from "../../assets/images/not-found.png";
import { useAppSelector } from "../../redux/hooks";

export default function TableOrders({
  isLoading,
  orders,
  valueSearch,
}: {
  isLoading: boolean;
  orders: IOrders;
  valueSearch: number;
}) {
  const [openModalEditStatus, setOpenModalEditStatus] =
    useState<IDataOrders | null>(null);

  // city from redux
  const city = useAppSelector((state) => state?.city?.data);
  const cityMap = useMemo(() => {
    return city.reduce((acc, cur) => {
      acc[cur.id] = cur.cityNameAr;
      return acc;
    }, {} as Record<number, string>);
  }, [city]);
  const getNameCityById = (id: number) => cityMap[id] || "";

  // loading and not found
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (orders?.rows?.length === 0) return <NotFoundData image={notFound} />;

  return (
    <>
      <TableContainer component={Paper} sx={{ height: "69vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columnsOrders.map((col) => (
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
            {orders?.rows?.map((row) => (
              <TableRow key={row.id}>
                {columnsOrders.map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.field === "edit" ? (
                      <Button onClick={() => setOpenModalEditStatus(row)}>
                        تعديل ألحالة
                      </Button>
                    ) : col.field === "isWholesale" ? (
                      row.isWholesale === true ? (
                        "نعم"
                      ) : (
                        "لا"
                      )
                    ) : col.field === "cityId" ? (
                      getNameCityById(row.cityId)
                    ) : (
                      (row[col.field as keyof typeof row] as React.ReactNode)
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonPagination totalPages={orders?.paginationInfo?.totalPagesCount} />
      <ModalEditStatus
        openModalEditStatus={openModalEditStatus}
        setOpenModalEditStatus={setOpenModalEditStatus}
        valueSearch={valueSearch}
      />
    </>
  );
}
