import { QueryClient } from "@tanstack/react-query";
import { request } from "../../axios/axios";
import { IDataOrders } from "../../types/IOrders";

// get orders by status and city
export const GetOrdersByStatusAndCity = async (
  status: string | null,
  page: number,
  valueSearch: number
) => {
  try {
    return await request.post(
      `/Orders/${
        valueSearch !== 0 ? "GetAllOrdersByCityOrder" : "GetAllOrdersByStatus"
      }?statusOrder=${status}&cityId=${valueSearch}`,
      {
        paginationInfo: {
          pageIndex: page,
          pageSize: 20,
        },
      }
    );
  } catch {
    return null;
  }
};

// edit on status order
export const EditOnStatusOrder = async (
  newData: IDataOrders,
  queryClient: QueryClient,
  showToast: (message: string, type: "success" | "error") => void,
  status: string | null,
  page: number,
  valueSearch: number
) => {
  try {
    const response = await request.post(`/Orders/ManageOrder`, newData);
    if (response?.status === 200) {
      showToast("تم تحديث حالة الاوردر بنجاح", "success");
      queryClient.setQueryData(
        ["GetOrdersByStatusAndCity", status, page, valueSearch],
        (oldData: { data: { rows: IDataOrders[] } } | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            data: {
              ...oldData.data,
              rows: oldData?.data?.rows?.map((existingOrder) =>
                existingOrder?.id === newData?.id
                  ? { ...existingOrder, status: newData.status }
                  : existingOrder
              ),
            },
          };
        }
      );
    }
  } catch {
    showToast("حدث خطا اثناء تحديث حالة ألاوردر", "error");
    return null;
  }
};
