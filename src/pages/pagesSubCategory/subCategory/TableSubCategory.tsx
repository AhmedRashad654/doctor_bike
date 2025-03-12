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
import { useNavigate, useSearchParams } from "react-router-dom";
import useContextState from "../../../componant/hooks/useContextState";
import ModalForAction from "../../../componant/shared/ModalForAction";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ISubCategory } from "../../../types/subCategory";
import useToast from "../../../componant/hooks/useToast";
import { EditAndAddDataSubCategory } from "../../../services/subCategoryApi/subCategoryApi";

export default function TableSubCategory() {
  const { openModalForAction, setOpenModalForAction } = useContextState();
  // show text such alert
  const {showToast} = useToast()
  // route
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const navigate = useNavigate();
  // redux
  const dispatch = useAppDispatch();
  const subCategory = useAppSelector((state) => state?.subCategory);

  // handle edit show sub category
  const handleEditShowSubCategory = async () => {
    if (!openModalForAction) return;
    const newData: ISubCategory = {
      ...(openModalForAction as ISubCategory),
      isShow:
        openModalForAction && "isShow" in openModalForAction
          ? !openModalForAction?.isShow
          : false,
    };
    await EditAndAddDataSubCategory(newData, dispatch, showToast);
  };
  
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ height: "72vh", marginTop: "10px" }}
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
            {subCategory?.data
              ?.filter((e) => e?.mainCategoryId.toString() === category)
              .map((row: ISubCategory) => (
                <TableRow key={row.id}>
                  {columnsMainAndSubCategory.map((col) => (
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
                            navigate("/dashboard/editSubCategory", {
                              state: { row },
                            })
                          }
                        >
                          تعديل{" "}
                        </Button>
                      ) : col.field === "imageUrl" ? (
                        <img
                          loading="lazy"
                          src={
                            row.imageUrl !== null
                              ? `${import.meta.env.VITE_BASE_URL}${
                                  row.imageUrl
                                }`
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
      <ModalForAction
        text={
          openModalForAction && "isShow" in openModalForAction
            ? openModalForAction?.isShow === true
              ? "هل انت متاكد من رغبتك بالغاء ظهور هذة الفئة"
              : "هل انت متاكد من رغبتك باعادة ظهور هذة الفئة"
            : ""
        }
        action={handleEditShowSubCategory}
      />
    </>
  );
}
