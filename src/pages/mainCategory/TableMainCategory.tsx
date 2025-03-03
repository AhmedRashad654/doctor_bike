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
import { columnsMainCategory } from "../../constants/columnTables";
import { FakeRowCategory } from "../../constants/arrays";
import ButtonPagination from "../../componant/ui/pagination/ButtonPagination";
import { useState } from "react";
export default function TableMainCategory() {
  const [page, setPage] = useState<number>(1);
  return (
    <>
      <TableContainer component={Paper} sx={{ minHeight: "62vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columnsMainCategory.map((col) => (
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
            {FakeRowCategory.map((row) => (
              <TableRow key={row.id}>
                {columnsMainCategory.map((col) => (
                  <TableCell
                    key={col.field}
                    sx={{
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.field === "edit" ? (
                      <Button>تعديل </Button>
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
    </>
  );
}
