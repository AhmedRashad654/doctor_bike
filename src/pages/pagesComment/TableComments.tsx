import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { columnsComment } from "../../constants/columnTables";
import { FakeComment } from "../../constants/arrays";
import ButtonPagination from "../../componant/ui/pagination/ButtonPagination";
import { useState } from "react";

export default function TableComments() {
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "62vh" }}>
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
            {FakeComment.map((row) => (
              <TableRow key={row.id}>
                {columnsComment.map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row[col.field as keyof typeof row]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonPagination page={page} setPage={setPage} totalPages={6} />
    </>
  );
}
