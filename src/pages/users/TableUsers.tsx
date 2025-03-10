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
import ButtonPagination from "../../componant/ui/pagination/ButtonPagination";
import { useState } from "react";
import ModalEditRole from "./ModalEditRole";
import ModalForAction from "../../componant/shared/ModalForAction";
import useContextState from "../../componant/hooks/useContextState";
import { IDataUserAPI, IUserAPI } from "../../types/user";
export default function TableUsers({ user }: { user: IUserAPI }) {
  const { openModalForAction, setOpenModalForAction } = useContextState();
  const [openModalEditRole, setOpenModalEditRole] = useState<{
    id: string;
  } | null>(null);
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ height: "75vh", marginTop: "30px" }}
      >
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
            {user?.rows?.map((row: IDataUserAPI) => (
              <TableRow key={row.id}>
                {columnsUser.map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.field === "block" ? (
                      <Switch
                        checked={row.block}
                        color="primary"
                        onClick={() =>
                          setOpenModalForAction({
                            id: row.id,
                            status: row.block,
                          })
                        }
                      />
                    ) : col.field === "editRole" ? (
                      <Button
                        onClick={() =>
                          setOpenModalEditRole({
                            id: row.id,
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
      <ButtonPagination totalPages={user?.paginationInfo?.totalPagesCount} />
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
