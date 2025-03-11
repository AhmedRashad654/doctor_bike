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
import { columnsMainAndSubCategory } from "../../../constants/columnTables";
import useContextState from "../../../componant/hooks/useContextState";
import ModalForAction from "../../../componant/shared/ModalForAction";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IMainCategory } from "../../../types/category";
import useToast from "../../../componant/hooks/useToast";
import { EditAndAddDataMainCategory } from "../../../services/category/category";

export default function TableMainCategory() {
  // constrol open modal
  const { openModalForAction, setOpenModalForAction } = useContextState();
  // redux toolkit
  const mainCategory = useAppSelector((state) => state?.mainCategory?.data);
  const dispatch = useAppDispatch();
  // navigate
  const navigate = useNavigate();
  // hook for show text such alert
  const { showToast } = useToast();
  // handle edit showmain category
  const handleShowCategory = async () => {
    if (!openModalForAction) return;
    const newData: IMainCategory = {
      ...(openModalForAction as IMainCategory),
      isShow:
        openModalForAction && "isShow" in openModalForAction
          ? !openModalForAction?.isShow
          : false,
    };
    await EditAndAddDataMainCategory(newData, dispatch, showToast);
  };
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ height: "80vh", marginTop: "30px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {columnsMainAndSubCategory.map((col) => (
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
            {mainCategory?.map((row: IMainCategory) => (
              <TableRow key={row.id}>
                {columnsMainAndSubCategory.map((col) => (
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
                    ) : col.field === "imageUrl" ? (
                      <img
                      loading="lazy"
                        src={
                          row.imageUrl !== null
                            ? `${import.meta.env.VITE_BASE_URL}${row.imageUrl}`
                            : undefined
                        }
                        className="w-[50px] h-[50px] rounded-[50%]"
                        alt="main category"
                      />
                    ) : col.field === "edit" ? (
                      <Button
                        onClick={() =>
                          navigate("/dashboard/editMainCategory", {
                            state: { row },
                          })
                        }
                      >
                        تعديل
                      </Button>
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
      {/* <ButtonPagination page={page} setPage={setPage} totalPages={6} /> */}
      <ModalForAction
        text={
          openModalForAction && "isShow" in openModalForAction
            ? openModalForAction?.isShow === true
              ? "هل انت متاكد من رغبتك بالغاء ظهور هذة الفئة"
              : "هل انت متاكد من رغبتك باعادة ظهور هذة الفئة"
            : ""
        }
        action={handleShowCategory}
      />
    </>
  );
}
