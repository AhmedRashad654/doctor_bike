import { Person } from "@mui/icons-material";
import {
  Modal,
  Stack,
  Typography,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IDataOrders } from "../../types/IOrders";
import { useQueryClient } from "@tanstack/react-query";
import useToast from "../../componant/hooks/useToast";
import { useSearchParams } from "react-router-dom";
import { EditOnStatusOrder } from "../../services/ordersApi/ordersApi";

export default function ModalEditStatus({
  openModalEditStatus,
  setOpenModalEditStatus,
  valueSearch,
}: {
  openModalEditStatus: IDataOrders | null;
  setOpenModalEditStatus: Dispatch<SetStateAction<IDataOrders | null>>;
  valueSearch: number;
}) {
  // search params
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const page = Number(searchParams.get("page"));

  // state selected new status
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  useEffect(() => {
    if (openModalEditStatus) {
      setSelectedStatus(openModalEditStatus?.status || "New");
    }
  }, [openModalEditStatus]);

  // handle close
  const handleClose = () => {
    setOpenModalEditStatus(null);
  };

  // query client from reqct-query
  const queryClient = useQueryClient();

  // hook for show text such alert
  const { showToast } = useToast();

  // handle edit status order
  const handleEditStatusOrder = async () => {
    if (!openModalEditStatus) return;
    if (!selectedStatus || selectedStatus === openModalEditStatus?.status)
      return;
    const newData: IDataOrders = {
      ...openModalEditStatus,
      status: selectedStatus,
      dateUpdate: new Date(),
    };
    await EditOnStatusOrder(
      newData,
      queryClient,
      showToast,
      status,
      page,
      valueSearch
    );
    handleClose();
  };
  return (
    <Modal keepMounted open={!!openModalEditStatus} onClose={handleClose}>
      <Stack
        alignItems="center"
        gap={"5px"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "340px",
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: "25px",
          padding: "15px",
        }}
      >
        <Person
          sx={{
            fontSize: "120px",
            color: "primary.main",
            marginBottom: "-15px",
          }}
        />
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          تعديل حالة الاوردر
        </Typography>
        <Select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          displayEmpty
          sx={{ width: "100%", marginBottom: "15px" }}
        >
          <MenuItem disabled>اختر الحالة الجديدة</MenuItem>
          {["New", "Done", "Pending", "Canceled"].map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>

        <Stack direction="row" gap={"10px"}>
          <Button
            variant="contained"
            color="primary"
            disabled={
              !selectedStatus || selectedStatus === openModalEditStatus?.status
            }
            onClick={handleEditStatusOrder}
          >
            تعديل الحالة
          </Button>

          <Button variant="outlined" onClick={handleClose}>
            إلغاء
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
