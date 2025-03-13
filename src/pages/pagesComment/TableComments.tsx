import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from "@mui/material";
import { columnsComment } from "../../constants/columnTables";
import ButtonPagination from "../../componant/ui/pagination/ButtonPagination";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  EditShowComment,
  GetComments,
} from "../../services/commentsApi/commentsApi";
import LoadingSkeleton from "../../componant/shared/LoadingSkeleton";
import notFound from "../../assets/images/not-found.png";
import NotFoundData from "../../componant/shared/NotFoundData";
import { IComments } from "../../types/IComments";
import useContextState from "../../componant/hooks/useContextState";
import ModalForAction from "../../componant/shared/ModalForAction";
import useToast from "../../componant/hooks/useToast";
import { formatDate } from "../../componant/shared/formatDate";

export default function TableComments() {
  // state open modal for edit show
  const { openModalForAction, setOpenModalForAction } = useContextState();

  // search params
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

  // hook for show text such alert
  const { showToast } = useToast();

  // query client from reqct-query
  const queryClient = useQueryClient();

  // handle edit comment
  const handleEditShowComment = async () => {
    if (!openModalForAction) return;
    const newData: IComments = {
      ...(openModalForAction as IComments),
      isShow:
        openModalForAction && "isShow" in openModalForAction
          ? !openModalForAction?.isShow
          : false,
    };
    await EditShowComment(newData, queryClient, page, showToast);
  };

  // get reports
  const { data, isLoading } = useQuery({
    queryKey: ["getComments", page],
    queryFn: () => GetComments(page),
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
              {columnsComment.map((col) => (
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
            {data?.data?.rows.map((row: IComments) => (
              <TableRow key={row.id}>
                {columnsComment.map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.field === "isShow" ? (
                      <Switch
                        checked={row.isShow}
                        color="primary"
                        onClick={() => setOpenModalForAction(row)}
                      />
                    ) : col.field === "dateAdd" ? (
                      formatDate(row?.dateAdd)
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
          openModalForAction && "isShow" in openModalForAction
            ? openModalForAction.isShow === true
              ? "هل انت متأكد من رغبتك بالغاء ظهور هذا التعليق"
              : "هل انت متأكد من رغبتك بإعادة ظهور هذا التعليق"
            : ""
        }
        action={handleEditShowComment}
      />
    </>
  );
}
