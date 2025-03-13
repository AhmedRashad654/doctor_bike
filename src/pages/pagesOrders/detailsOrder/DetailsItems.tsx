import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { columnDetailsOrder } from "../../../constants/columnTables";
import { IDataOrders } from "../../../types/IOrders";

export default function DetailsItems({ data }: { data: IDataOrders }) {
  return (
    <Box sx={{ marginRight: "5px" }}>
      <Typography variant="h5" sx={{ color: "primary.main", marginY: "15px" }}>
        تفاصيل المنتجات
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columnDetailsOrder.map((col) => (
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
            {data?.details?.map((item) => (
              <TableRow key={item?.id}>
                <TableCell
                  sx={{
                    textAlign: "right",
                  }}
                >
                  {item?.item?.nameAr}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "right",
                  }}
                >
                  {item?.quantity}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "right",
                  }}
                >
                  {item?.itemPrice}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack sx={{ mt: 2, gap: "3px" }}>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          السعر الاجمالي بالخصم :{" "}
          <span className="text-black text-[1rem]">
            {data?.totalPriceWithDiscound}
          </span>
        </Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          السعر الاجمالي بجون الخصم :{" "}
          <span className="text-black text-[1rem]">
            {data?.totalPriceWithOutDiscound}
          </span>
        </Typography>
      </Stack>
    </Box>
  );
}
