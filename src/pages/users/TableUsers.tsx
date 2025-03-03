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
import ModalBlockUser from "./ModalBlockUser";
export default function CustomTable() {
  const [page, setPage] = useState<number>(1);
    const [openModalBlock, setOpenModalBlock] = useState<{
      id: number;
      isBlocked: boolean;
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
                    {col.field === "isBlocked" ? (
                      <Switch
                        checked={row.isBlocked}
                        color="primary"
                        onClick={() =>
                          setOpenModalBlock({
                            id: row.id,
                            isBlocked: row.isBlocked,
                          })
                        }
                      />
                    ) : col.field === "editRole" ? (
                      <Button>تعديل الدور</Button>
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
      <ModalBlockUser
        openModalBlock={openModalBlock}
        setOpenModalBlock={setOpenModalBlock}
      />
    </>
  );
}
