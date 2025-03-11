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
import { EditBlock } from "../../services/users/user";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useToast from "../../componant/hooks/useToast";
export default function TableUsers({ user }: { user: IUserAPI }) {
  // state open modal for block
  const { openModalForAction, setOpenModalForAction } = useContextState();
  // search params
  const [searchParams] = useSearchParams();
  const userQuery = searchParams.get("user");
  const page = Number(searchParams.get("page"));
  // query client from reqct-query
  const queryClient = useQueryClient();
  // hook for show text such alert
  const { showToast } = useToast();
  // state open modal for edit role
  const [openModalEditRole, setOpenModalEditRole] = useState<{
    id: string;
  } | null>(null);
  // handle active and unactive user
  const handleBlock = async () => {
    if (!openModalForAction) return;
    const newData: IDataUserAPI = {
      ...(openModalForAction as IDataUserAPI),
      block:
        openModalForAction && "block" in openModalForAction
          ? !openModalForAction?.block
          : false,
      dateUpdate: new Date(),
    };
    await EditBlock(newData, queryClient, userQuery, page, showToast);
  };
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
                        checked={!row.block}
                        color="primary"
                        onClick={() => setOpenModalForAction(row)}
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
                      (row[col.field as keyof typeof row] as React.ReactNode)
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
          openModalForAction && "block" in openModalForAction
            ? openModalForAction.block === false
              ? "هل انت متأكد من رغبتك بحظر هذا المستخدم؟"
              : "هل انت متأكد من رغبتك بإعادة نشاط هذا المستخدم؟"
            : ""
        }
        action={handleBlock}
      />
      <ModalEditRole
        openModalEditRole={openModalEditRole}
        setOpenModalEditRole={setOpenModalEditRole}
      />
    </>
  );
}
