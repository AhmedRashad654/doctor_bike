import { QueryClient } from "@tanstack/react-query";
import { request } from "../../axios/axios";
import { ICity } from "../../types/cities";

// get all city
export const GetAllCity = async () => {
  try {
    return await request.post(`/Cities/GetAllCities`, {
      paginationInfo: {
        pageIndex: 0,
        pageSize: 0,
      },
    });
  } catch {
    return null;
  }
};

// edit on city
export const EditAndAddCity = async (
  newData: ICity,
  queryClient: QueryClient,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const response = await request.post(`/Cities/ManageCity`, newData);
    if (response?.status === 200) {
      if (newData.id != 0) {
        showToast("تم تحديث ألمدينة بنجاح", "success");
        queryClient.setQueryData(
          ["GetAllCity"],
          (oldData: { data: { rows: ICity[] } } | undefined) => {
            if (!oldData) return;
            return {
              ...oldData,
              data: {
                ...oldData.data,
                rows: oldData?.data?.rows?.map((existingCity) =>
                  existingCity?.id === newData?.id
                    ? response?.data
                    : existingCity
                ),
              },
            };
          }
        );
      } else {
        showToast("تم اضافة ألمدينة بنجاح", "success");
      }
    }
  } catch {
    showToast("حدث خطا", "error");
    return null;
  }
};
