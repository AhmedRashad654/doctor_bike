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
import { columnsCities } from "../../../constants/columnTables";
import { useNavigate } from "react-router-dom";
import useContextState from "../../../componant/hooks/useContextState";
import ModalForAction from "../../../componant/shared/ModalForAction";
import { ICity } from "../../../types/cities";
import { useQueryClient } from "@tanstack/react-query";
import useToast from "../../../componant/hooks/useToast";
import { EditAndAddCity } from "../../../services/city/city";

export default function TableCities({
  city,
  valueSearch,
}: {
  city: ICity[];
  valueSearch: string;
}) {
  const { openModalForAction, setOpenModalForAction } = useContextState();
  // hook to show text such alert
  const { showToast } = useToast();

  // route
  const navigate = useNavigate();

  // query client from reqct-query
  const queryClient = useQueryClient();

  // edit show city
  const handleEditShowCity = async () => {
    if (!openModalForAction) return;
    const newData: ICity = {
      ...(openModalForAction as ICity),
      isShow:
        openModalForAction && "isShow" in openModalForAction
          ? !openModalForAction?.isShow
          : false,
      dateUpdate: new Date().toISOString(),
    };
    await EditAndAddCity(newData, queryClient, showToast);
  };
  return (
    <>
      <TableContainer component={Paper} sx={{ height: "75vh" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columnsCities.map((col) => (
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
            {city
              .filter(
                (e) =>
                  !valueSearch ||
                  e?.cityNameAr
                    .toLowerCase()
                    .includes(valueSearch.toLowerCase())
              )
              .map((row: ICity) => (
                <TableRow key={row.id}>
                  {columnsCities.map((col) => (
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
                            navigate("/dashboard/editCity", {
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
                          onClick={() => setOpenModalForAction(row)}
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
      <ModalForAction
        text={
          openModalForAction && "isShow" in openModalForAction
            ? openModalForAction?.isShow === true
              ? "هل انت متاكد من رغبتك بالغاء ظهور هذة المدينة"
              : "هل انت متاكد من رغبتك باعادة ظهور هذة المدينة"
            : ""
        }
        action={handleEditShowCity}
      />
    </>
  );
}
