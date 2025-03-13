import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Switch,
} from "@mui/material";
import { columnsProduct } from "../../../constants/columnTables";
import { useNavigate, useSearchParams } from "react-router-dom";
import ButtonPagination from "../../../componant/ui/pagination/ButtonPagination";
import useContextState from "../../../componant/hooks/useContextState";
import ModalForAction from "../../../componant/shared/ModalForAction";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  EditProduct,
  GetProductBySubCategory,
} from "../../../services/productApi/productApi";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";
import NotFoundData from "../../../componant/shared/NotFoundData";
import notFound from "../../../assets/images/not-found.png";
import React, { useState } from "react";
import { IProduct } from "../../../types/IProduct";
import useToast from "../../../componant/hooks/useToast";

export default function TableProduct({
  valueSearch,
}: {
  valueSearch: number | null;
}) {
  const { openModalForAction, setOpenModalForAction } = useContextState();
  const [statusBetweenThree, setStatusBetweenThree] = useState<string | null>(
    null
  );

  // route
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

  // query client from reqct-query
  const queryClient = useQueryClient();
  // hook for show text such alert
  const { showToast } = useToast();

  // get product by sub category
  const { data, isLoading } = useQuery({
    queryKey: ["GetProductBySubCategory", valueSearch, page],
    queryFn: () => GetProductBySubCategory(valueSearch, page),
    enabled: valueSearch !== null && !!page,
  });

  // return loading
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (data?.data?.rows?.length === 0) return <NotFoundData image={notFound} />;

  // handle Edit Product
  const handleEditProduct = async () => {
    if (!openModalForAction) return;
    const newData: IProduct = {
      ...(openModalForAction as IProduct),
      isShow:
        "isShow" in openModalForAction
          ? statusBetweenThree === "isShow"
            ? !openModalForAction?.isShow
            : openModalForAction?.isShow
          : false,
      isNewItem:
        "isNewItem" in openModalForAction
          ? statusBetweenThree === "isNewItem"
            ? !openModalForAction?.isNewItem
            : openModalForAction?.isNewItem
          : false,
      isMoreSales:
        "isMoreSales" in openModalForAction
          ? statusBetweenThree === "isMoreSales"
            ? !openModalForAction?.isMoreSales
            : openModalForAction?.isMoreSales
          : false,
    };
    await EditProduct(newData, queryClient, valueSearch, page, showToast);
  };
  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "62vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columnsProduct.map((col) => (
                <TableCell
                  key={col.field}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "right",
                    minWidth: "180px",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.rows?.map((row: IProduct) => (
              <TableRow key={row.id}>
                {columnsProduct.map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.field === "edit" ? (
                      <Button
                        onClick={() =>
                          navigate(`/dashboard/editProduct/${row.id}`, {
                            state: { row },
                          })
                        }
                      >
                        تعديل{" "}
                      </Button>
                    ) : col.field === "isShow" ? (
                      <Switch
                        checked={row.isShow}
                        color="primary"
                        onClick={() => {
                          setStatusBetweenThree("isShow");
                          setOpenModalForAction(row);
                        }}
                      />
                    ) : col.field === "isNewItem" ? (
                      <Switch
                        checked={row.isNewItem}
                        color="primary"
                        onClick={() => {
                          setStatusBetweenThree("isNewItem");
                          setOpenModalForAction(row);
                        }}
                      />
                    ) : col.field === "isMoreSales" ? (
                      <Switch
                        checked={row.isMoreSales}
                        color="primary"
                        onClick={() => {
                          setStatusBetweenThree("isMoreSales");
                          setOpenModalForAction(row);
                        }}
                      />
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
      <ButtonPagination
        totalPages={data?.data?.paginationInfo?.totalPagesCount}
      />
      <ModalForAction
        text={
          statusBetweenThree === "isShow"
            ? openModalForAction && "isShow" in openModalForAction
              ? openModalForAction.isShow === true
                ? "هل انت متاكد من رغبتك بالغاء ظهور هذا المنتج"
                : "هل انت متاكد من رغبتك باعادة ظهور هذا المنتج"
              : ""
            : statusBetweenThree === "isNewItem"
            ? openModalForAction && "isNewItem" in openModalForAction
              ? openModalForAction.isNewItem === true
                ? "هل انت متاكد من أن هذا المنتج ليس جديد"
                : "هل انت متاكد من ان هذا المنتج جديد"
              : ""
            : statusBetweenThree === "isMoreSales"
            ? openModalForAction && "isMoreSales" in openModalForAction
              ? openModalForAction.isMoreSales === true
                ? "هل انت متاكد من ان هذا المنتج ليس اكثر مبيعا"
                : "هل انت متاكد من ان هذا المنتج اكثر مبيعا"
              : ""
            : ""
        }
        action={handleEditProduct}
      />
    </>
  );
}
