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
import { columnsAdvertisement } from "../../../constants/columnTables";
import { useNavigate, useSearchParams } from "react-router-dom";
import ButtonPagination from "../../../componant/ui/pagination/ButtonPagination";
import useContextState from "../../../componant/hooks/useContextState";
import ModalForAction from "../../../componant/shared/ModalForAction";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  EditAndAddAdvertisement,
  GetAdvertisement,
} from "../../../services/advertisementApi/advertisementApi";
import LoadingSkeleton from "../../../componant/shared/LoadingSkeleton";
import NotFoundData from "../../../componant/shared/NotFoundData";
import notFound from "../../../assets/images/not-found.png";
import { IAdvertisement } from "../../../types/IAdvertisement";
import useToast from "../../../componant/hooks/useToast";

export default function TableAdvertisement({
  valueSearch,
}: {
  valueSearch: string;
}) {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const { openModalForAction, setOpenModalForAction } = useContextState();
  const navigate = useNavigate();

  // query client from reqct-query
  const queryClient = useQueryClient();
  // hook for show text such alert
  const { showToast } = useToast();

  // get users
  const { data, isLoading } = useQuery({
    queryKey: ["GetAdvertisement", page],
    queryFn: () => GetAdvertisement(page),
    enabled: !!page,
  });
  if (isLoading)
    return <LoadingSkeleton height={100} width={"100%"} text="column" />;
  if (data?.data?.rows?.length === 0) return <NotFoundData image={notFound} />;

  // edit show adv
  const handleEditShowAdv = async () => {
    if (!openModalForAction) return;
    const newData: IAdvertisement = {
      ...(openModalForAction as IAdvertisement),
      isShow:
        openModalForAction && "isShow" in openModalForAction
          ? !openModalForAction?.isShow
          : false,
    };
    await EditAndAddAdvertisement(newData, queryClient, page, showToast);
  };
  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "62vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columnsAdvertisement.map((col) => (
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
            {data?.data?.rows
              ?.filter(
                (e: IAdvertisement) =>
                  !valueSearch ||
                  e?.title.toLowerCase().includes(valueSearch.toLowerCase())
              )
              .map((row: IAdvertisement) => (
                <TableRow key={row.id}>
                  {columnsAdvertisement.map((col) => (
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
                            navigate(`/dashboard/editAdvertisement`, {
                              state: { row },
                            })
                          }
                        >
                          تعديل{" "}
                        </Button>
                      ) : col.field === "imgUrl" ? (
                        <img
                          loading="lazy"
                          src={
                            row.imgUrl !== null
                              ? `${import.meta.env.VITE_BASE_URL}${row.imgUrl}`
                              : undefined
                          }
                          className="w-[50px] h-[50px] rounded-[50%]"
                          alt="main category"
                        />
                      ) : col.field === "isShow" ? (
                        <Switch
                          checked={row.isShow}
                          color="primary"
                          onClick={() => setOpenModalForAction(row)}
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
          openModalForAction && "isShow" in openModalForAction
            ? openModalForAction.isShow === true
              ? "هل انت متاكد من رغبتك بالغاء ظهور ألاعلان"
              : "هل انت متاكد من رغبتك باعادة ظهور هذا الاعلان"
            : ""
        }
        action={handleEditShowAdv}
      />
    </>
  );
}
