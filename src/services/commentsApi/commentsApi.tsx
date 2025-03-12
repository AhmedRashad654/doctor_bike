import { QueryClient } from "@tanstack/react-query";
import { request } from "../../axios/axios";
import { IComments } from "../../types/IComments";

// get comments
export const GetComments = async (page: number) => {
  try {
    return await request.post(`/api/Comments/GetAllComments`, {
      paginationInfo: {
        pageIndex: page,
        pageSize: 40,
      },
    });
  } catch {
    return null;
  }
};

// edit show comment
export const EditShowComment = async (
  newData: IComments | null,
  queryClient: QueryClient,
  page: number,
  showToast: (message: string, type: "success" | "error") => void
) => {
  try {
    const response = await request.post(`/api/Comments/ManageComment`, newData);
    if (response?.status === 200) {
      showToast("تم تحديث حالة التعليق بنجاح", "success");
      queryClient.setQueryData(
        ["getComments", page],
        (oldData: { data: { rows: IComments[] } } | undefined) => {
          if (!oldData) return;
          return {
            ...oldData,
            data: {
              ...oldData.data,
              rows: oldData?.data?.rows?.map((existingComment) =>
                existingComment?.id === newData?.id
                  ? { ...existingComment, isShow: newData.isShow }
                  : existingComment
              ),
            },
          };
        }
      );
    }
  } catch {
    showToast("حدث خطا اثناء تحديث حالة ألتعليق", "error");
    return null;
  }
};
