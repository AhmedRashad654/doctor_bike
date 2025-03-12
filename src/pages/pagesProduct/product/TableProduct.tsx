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
import { FakeProduct } from "../../../constants/arrays";
import { columnsProduct } from "../../../constants/columnTables";
import { useNavigate, useSearchParams } from "react-router-dom";
import ButtonPagination from "../../../componant/ui/pagination/ButtonPagination";
import useContextState from "../../../componant/hooks/useContextState";
import ModalForAction from "../../../componant/shared/ModalForAction";
import { useQuery } from "@tanstack/react-query";
import { GetProductBySubCategory } from "../../../services/productApi/productApi";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";
import NotFoundData from "../../../componant/shared/NotFoundData";
import notFound from "../../../assets/images/not-found.png";

export default function TableProduct({ valueSearch }: { valueSearch: number }) {
  const { openModalForAction, setOpenModalForAction } = useContextState();

  // route
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

  // get product by sub category
  const { data, isLoading } = useQuery({
    queryKey: ["GetProductBySubCategory", valueSearch, page],
    queryFn: () => GetProductBySubCategory(valueSearch, page),
    enabled: !!valueSearch || !!page,
  });

  // return loading
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (data?.data?.rows?.length === 0) return <NotFoundData image={notFound} />;

  // handle Edit Product
  const handleEditProduct = () => {};
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
            {FakeProduct.map((row) => (
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
                          navigate("/dashboard/editProduct", {
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
                        onClick={() => setOpenModalForAction(row)}
                      />
                    ) : (
                      row[col.field as keyof typeof row]
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
          openModalForAction?.isShow === true
            ? "هل انت متاكد من رغبتك بالغاء ظهور هذا المنتج"
            : "هل انت متاكد من رغبتك باعادة ظهور هذا المنتج"
        }
        action={handleEditProduct}
      />
    </>
  );
}
