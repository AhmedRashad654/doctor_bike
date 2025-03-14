import { QueryClient } from "@tanstack/react-query";
import { request } from "../../axios/axios";
import { IAdvertisement } from "../../types/IAdvertisement";

// get advertisement
export const GetAdvertisement = async (page: number) => {
  try {
    return await request.post(`/OnlineAds/GetAllAds`, {
      paginationInfo: {
        pageIndex: page,
        pageSize: 20,
      },
    });
  } catch {
    return null;
  }
};

// edit block user
export const EditAndAddAdvertisement = async (
  newData: IAdvertisement,
  queryClient: QueryClient | null,
  page: number | undefined,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const formDate = new FormData();
    if (newData.img) {
      formDate.append("img", newData?.img as File);
    }

    const response = await request.post(
      `/OnlineAds/ManageAds?Id=${newData.id}&Title=${
        newData?.title
      }&Description=${newData?.description}&UrlAds=${newData?.urlAds}&IsShow=${
        newData.isShow
      }&addDate=${
        newData?.id === 0 ? new Date().toISOString() : newData.addDate
      }&UserAddId=<string>&UpdateDate=${new Date().toISOString()}&UserUpdateId=<string>`,
      formDate
    );
    if (response?.status === 200) {
      if (newData.id !== 0) {
        showToast("تم تحديث حالة الاعلان بنجاح", "success");
        if (queryClient) {
          queryClient.setQueryData(
            ["GetAdvertisement", page],
            (oldData: { data: { rows: IAdvertisement[] } } | undefined) => {
              if (!oldData) return;
              return {
                ...oldData,
                data: {
                  ...oldData.data,
                  rows: oldData?.data?.rows?.map((existingAdv) =>
                    existingAdv?.id === newData?.id
                      ? response?.data
                      : existingAdv
                  ),
                },
              };
            }
          );
        }
      } else {
        showToast("تم  اضافة الاعلان بنجاح", "success");
      }
    }
  } catch (error) {
    console.log(error);
    showToast("حدث خطا ", "error");
    return null;
  }
};
