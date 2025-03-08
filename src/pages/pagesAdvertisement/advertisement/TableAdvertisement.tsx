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
import { useState } from "react";
import { FakeAdvertisement } from "../../../constants/arrays";
import { columnsAdvertisement } from "../../../constants/columnTables";
import { useNavigate } from "react-router-dom";
import ButtonPagination from "../../../componant/ui/pagination/ButtonPagination";
import useContextState from "../../../componant/hooks/useContextState";
import ModalForAction from "../../../componant/shared/ModalForAction";

export default function TableAdvertisement() {
  const [page, setPage] = useState<number>(1);
  const { openModalForAction, setOpenModalForAction } = useContextState();
  const navigate = useNavigate();
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
            {FakeAdvertisement.map((row) => (
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
                          navigate("/dashboard/editAdvertisement", {
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
                        onClick={() =>
                          setOpenModalForAction({
                            id: row.id,
                            status: row.isShow,
                          })
                        }
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
      <ButtonPagination page={page} setPage={setPage} totalPages={6} />
      <ModalForAction
        text={
          openModalForAction?.status === true
            ? "هل انت متاكد من رغبتك بالغاء ظهور ألاعلان"
            : "هل انت متاكد من رغبتك باعادة ظهور هذا الاعلان"
        }
      />
    </>
  );
}
