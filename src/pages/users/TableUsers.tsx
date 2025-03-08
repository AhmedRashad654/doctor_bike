import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  Button,
} from "@mui/material";
import { columnsUser } from "../../constants/columnTables";
import { FakeRowUsers } from "../../constants/arrays";
import ButtonPagination from "../../componant/ui/pagination/ButtonPagination";
import { useState } from "react";
import ModalEditRole from "./ModalEditRole";
import ModalForAction from "../../componant/shared/ModalForAction";
import useContextState from "../../componant/hooks/useContextState";
export default function TableUsers() {
  const [page, setPage] = useState<number>(1);
  const { openModalForAction, setOpenModalForAction } = useContextState();
  const [openModalEditRole, setOpenModalEditRole] = useState<{
    id: number;
    currentRole: string;
  } | null>(null);
  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "62vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columnsUser.map((col) => (
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
            {FakeRowUsers.map((row) => (
              <TableRow key={row.id}>
                {columnsUser.map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.field === "isActived" ? (
                      <Switch
                        checked={row.isActived}
                        color="primary"
                        onClick={() =>
                          setOpenModalForAction({
                            id: row.id,
                            status: row.isActived,
                          })
                        }
                      />
                    ) : col.field === "editRole" ? (
                      <Button
                        onClick={() =>
                          setOpenModalEditRole({
                            id: row.id,
                            currentRole: row.role,
                          })
                        }
                      >
                        تعديل الدور
                      </Button>
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
            ? "هل انت متاكد من رغبتك بحظر هذا المستخدم"
            : "هل انت متاكد من رغبتك باعادة نشاط هذا المستخدم"
        }
      />
      <ModalEditRole
        openModalEditRole={openModalEditRole}
        setOpenModalEditRole={setOpenModalEditRole}
      />
    </>
  );
}
