import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { columnsOrders } from "../../constants/columnTables";
import { FakeOrders } from "../../constants/arrays";
import ButtonPagination from "../../componant/ui/pagination/ButtonPagination";
import { useState } from "react";
import ModalEditStatus from "./ModalEditStatus";
export default function TableOrders() {
  const [page, setPage] = useState<number>(1);
  const [openModalEditStatus, setOpenModalEditStatus] = useState<{
    id: number;
    currentStatus: string;
  } | null>(null);
  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "62vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columnsOrders.map((col) => (
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
            {FakeOrders.map((row) => (
              <TableRow key={row.id}>
                {columnsOrders.map((col) => (
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
                          setOpenModalEditStatus({
                            id: row.id,
                            currentStatus: row.status,
                          })
                        }
                      >
                        تعديل ألحالة
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
      <ModalEditStatus
        openModalEditStatus={openModalEditStatus}
        setOpenModalEditStatus={setOpenModalEditStatus}
      />
    </>
  );
}
